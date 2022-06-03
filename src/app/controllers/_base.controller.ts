import { DbConnection } from 'app/helpers';

export class BaseController {
  constructor() {
    const dbConnection = new DbConnection();
    dbConnection.connect();
  }
}
