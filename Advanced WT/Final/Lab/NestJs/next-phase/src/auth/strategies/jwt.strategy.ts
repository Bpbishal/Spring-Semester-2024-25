import { Injectable, UnauthorizedException,  } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  userService: any;
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwt_secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
    // const user = await this.usersService.findByEmail(payload.sub); 
    // if (!user) throw new UnauthorizedException();
    // return user; 
  }
}
