import { Query } from 'mongoose';

class RoomApiHelper {
  private query: Query<any[], any, {}, any>;
  private queryStr: {
    [key: string]: string | string[];
  };

  constructor(
    query: Query<any[], any, {}, any>,
    queryStr: {
      [key: string]: string | string[];
    },
  ) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find({
      ...location,
    });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Remove fields form query
    const removeFields = ['location'];
    removeFields.forEach((field) => delete queryCopy[field]);

    this.query = this.query.find(queryCopy);
    return this;
  }
}

export default RoomApiHelper;
