import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmployeeModule } from 'src/employee/employee.module';
import { OtpService } from './otp.service';
import { BlacklistService } from './blacklist.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    EmployeeModule,
    JwtModule.register({
      secret: 'jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy,OtpService,BlacklistService],
  controllers: [AuthController],
})
export class AuthModule {}
