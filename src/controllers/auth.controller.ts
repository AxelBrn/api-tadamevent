import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/dto/auth.dto';
import { AuthService } from '../services/auth.service';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  @ApiOperation({ summary: 'Authentification endpoint' })
  public login(@Body() authDto: AuthDto) {
    return this.authService
      .setAuthentification(authDto.mail, authDto.password)
      .then((response) => {
        return response;
      });
  }
}
