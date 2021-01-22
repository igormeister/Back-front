import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()

export class AuthService {
  constructor(
    private readonly clientService: ClientService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(user_login: string, pass: string): Promise<any> {
    const user = await this.clientService.findOne(user_login);
    const password = await bcrypt.compare(pass, user.password);

    if (user && password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { user_login: user.user_login, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
