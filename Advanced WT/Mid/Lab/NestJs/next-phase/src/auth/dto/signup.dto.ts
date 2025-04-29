import { isEmail, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  //@MinLength(3)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsNotEmpty()
  role: string; 
}
