import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('employees')
@UseGuards(JwtAuthGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.employeeService.findAllEmployees();
  }

  // Search employees
  @Get('search')
  search(@Query('keyword') keyword: string, @Req() req) {
    return this.employeeService.searchEmployees(keyword);
  }

  // View own profile
  @Get('me')
  async getProfile(@Req() req) {
    const userId = req.user.id; 
    return this.employeeService.getProfile(userId);
  }

  // Update own profile
  @Patch('me')
  @UseGuards(JwtAuthGuard)
  update(@Req() req, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const userId = req.user.id;
    return this.employeeService.updateOwnProfile(userId, updateEmployeeDto);
  }
  
}
