import mongoose, { ConnectOptions } from 'mongoose';

class DbConnection {
  async connect() {
    try {
      if (mongoose.connection.readyState >= 1) {
        return;
      }

      const dbUri = process.env.DB_URI + '';
      const dbOpts: ConnectOptions = {
        waitQueueTimeoutMS: 2500,
        wtimeoutMS: 2500,
        dbName: process.env.DB_NAME,
      };

      await mongoose.connect(dbUri, dbOpts);
      console.info('Connected to database successful!');
    } catch (error) {
      console.log(error);
      throw new Error((error as Error).message);
    }
  }
}

export default DbConnection;
