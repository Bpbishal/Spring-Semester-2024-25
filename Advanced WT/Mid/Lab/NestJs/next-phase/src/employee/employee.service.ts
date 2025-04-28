import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { User } from '../users/user.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  async findAllEmployees() {
    return this.employeeRepository.find();
  }
  
  async findOneEmployee(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['employee'],
    });
    if (!user) throw new NotFoundException('User not found');
    return user.employee;
  }
  



async updateOwnProfile(userId: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  
    if (!employee) {
      throw new Error('Employee not found');
    }
  
   
    if (updateEmployeeDto.name !== undefined) employee.name = updateEmployeeDto.name;
    if (updateEmployeeDto.phone !== undefined) employee.phone = updateEmployeeDto.phone;
    if (updateEmployeeDto.address !== undefined) employee.address = updateEmployeeDto.address;
    if (updateEmployeeDto.department !== undefined) employee.department = updateEmployeeDto.department;
  
    return this.employeeRepository.save(employee);
  }
  
  

  async searchEmployees(keyword: string) {
    return this.employeeRepository.find({
      where: [
        { name: Like(`%${keyword}%`), role: 'employee' },
        { department: Like(`%${keyword}%`), role: 'employee' }
      ],
    });
  }
  async getProfile(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['employee'], 
    });
    
    if (!user) {
      throw new Error('User not found');
    }

    return user; 
  }
}
