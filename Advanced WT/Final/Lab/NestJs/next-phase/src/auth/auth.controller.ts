import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from 'src/employee/dto/verify-otp.dto';
import { UsersService } from 'src/users/users.service';
import { OtpService } from './otp.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly otpService: OtpService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
  @Post('verify-otp')
async verifyOtp(@Body() dto: VerifyOtpDto) {
  const user = await this.usersService.findByEmail(dto.email);

  if (!this.otpService.verifyOtp(dto.email, dto.otp)) {
    throw new UnauthorizedException('Invalid OTP');
  }

  this.otpService.clearOtp(dto.email);
  return { message: 'OTP verified. Proceed to change password.' };
}

}
