import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singup() {
    return 'I am signup';
  }

  @Post('signin')
  signin() {
    return 'I am signin';
  }
}
