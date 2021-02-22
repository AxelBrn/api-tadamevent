import * as jwt from 'jsonwebtoken';
import * as sha256 from 'crypto-js/sha256';
import * as Base64 from 'crypto-js/enc-base64';
import * as crypto from 'crypto';

export default class JwtUtil {
  private static privateKey: string;

  private constructor() {
    JwtUtil.privateKey = Base64.stringify(
      sha256(crypto.randomBytes(128).toString('hex')),
    );
  }

  public static sign(data: any, exp?: string) {
    if (!JwtUtil.privateKey) {
      new JwtUtil();
    }
    return jwt.sign({ ...data }, JwtUtil.privateKey, {
      expiresIn: exp || '3600s',
    });
  }
}
