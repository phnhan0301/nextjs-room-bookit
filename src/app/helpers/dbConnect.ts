import mongoose from 'mongoose';

class DbConnect {
  async connect() {
    try {
      if (mongoose.connection.readyState >= 1) {
        return;
      }

      const dbUri = (process.env.DB_URI + '')
        .replace('{DB_USER}', process.env.DB_USER + '')
        .replace('{DB_PASS}', process.env.DB_PASS + '');
      const dbOpts = {};

      await mongoose.connect(dbUri, dbOpts);
      console.info('Connected to database successful!');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default DbConnect;
