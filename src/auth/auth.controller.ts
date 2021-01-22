import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
import { ClientDto } from '../client/dto/client.dto';
import { ClientService } from '../client/client.service';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly clientService: ClientService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() data: ClientDto) {
    const user = {
      user_uuid : uuidv4(),
      user_login: data.user_login,
      password: await bcrypt.hash(data.password, 10),
      card: data.card,
      admin: false,
    };
    return await this.clientService.addUser(user);
  }
}
