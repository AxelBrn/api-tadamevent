import * as mysql2 from 'mysql2/promise';

export default class Mysql {
  private static instance;

  public static async createInstance(): Promise<any> {
    Mysql.instance = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Connected to Database');
  }

  public static getInstance(): any {
    return Mysql.instance;
  }
}
