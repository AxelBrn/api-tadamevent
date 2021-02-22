import { Injectable } from '@nestjs/common';
import User from 'src/models/user.model';
import UserRepository from '../repository/user.repository';
import * as bcrypt from 'bcryptjs';
import JwtUtil from '../utils/jwt.util';

@Injectable()
export class AuthService {
  private userRepository: UserRepository = new UserRepository();
  /**
   * setAuthentification
   */
  public async setAuthentification(
    mail: string,
    password: string,
  ): Promise<any> {
    const user: User = await this.userRepository.findByMail(mail);
    if (bcrypt.compareSync(password, user.getPassword())) {
      return { token: JwtUtil.sign(user) };
    }
    return { connected: false };
  }
}
