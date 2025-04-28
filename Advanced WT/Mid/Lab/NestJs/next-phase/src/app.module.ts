import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { Employee } from './employee/employee.entity';
import { EmployeeController } from './employee/employee.controller';
import { LeaveRequestsModule } from './leave-request/leave-request.module';
import { LeaveRequest } from './leave-request/leave-request.entity';
import { LeaveRequestsService } from './leave-request/leave-request.service';
import { LeaveRequestsController } from './leave-request/leave-request.controller';

@Module({
  imports: [
    UsersModule, 
    AuthModule, 
    TypeOrmModule.forFeature([User,Employee,LeaveRequest]),  
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [User,Employee,LeaveRequest], 
      synchronize: true,  
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nextphase',
    }), EmployeeModule, LeaveRequestsModule,
  ],
  controllers: [AppController, UsersController, AuthController,EmployeeController,LeaveRequestsController],
  providers: [AppService, UsersService,EmployeeService,LeaveRequestsService], 
})
export class AppModule {}
