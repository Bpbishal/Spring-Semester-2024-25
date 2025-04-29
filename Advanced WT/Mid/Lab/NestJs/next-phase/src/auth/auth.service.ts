import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 
import { UsersService } from '../users/users.service';  
import * as bcrypt from 'bcrypt';  
import { SignupDto } from './dto/signup.dto'; 
import { LoginDto } from './dto/login.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';  
import { Employee } from '../employee/employee.entity';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async signup(signUpDto: SignupDto) {
    const { email, password, role } = signUpDto;
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = this.userRepository.create({ 
      email, 
      password: hashedPassword, 
      role: role as 'employee' | 'admin' | 'HR' | 'department_manager',
    });
  
    if (role === 'employee') {
      const employee = this.employeeRepository.create({
        name: 'New Employee',
        email: email,
        role: role,
        department: 'Unknown',
      });
  
      await this.employeeRepository.save(employee);
  
      user.employee = employee;
    }
  
    return this.userRepository.save(user);
  }
  

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
}
