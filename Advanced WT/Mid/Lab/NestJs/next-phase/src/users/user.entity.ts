import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { LeaveRequest } from 'src/leave-request/leave-request.entity';
export type Role = 'admin' | 'HR' | 'employee' | 'department_manager';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'employee' })
  role: Role;

//   @Column({ default: false })
//   isEmailVerified: boolean;

@OneToOne(() => Employee, (employee) => employee.user, { cascade: true })
@JoinColumn()
employee: Employee;

@OneToMany(() => LeaveRequest, leaveRequest => leaveRequest.user)
leaveRequests: LeaveRequest[];
}
