import User from '../models/user.model';
import Mysql from '../db.config';

export default class UserRepository {
  private mysql;

  public constructor() {
    this.mysql = Mysql.getInstance();
  }

  public async findByMail(mail: string): Promise<User> {
    let user: User = new User();
    const [rows] = await this.mysql.execute(
      'SELECT * FROM user WHERE mail = ?',
      [mail],
    );
    if (rows.length) {
      user = User.buildOne(rows[0]);
    }
    return user;
  }
}
