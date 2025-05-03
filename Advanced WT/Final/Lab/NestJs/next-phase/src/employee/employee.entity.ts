import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  import { User } from '../users/user.entity';
  
  @Entity()
  export class Employee {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
  
    @Column()
    department: string;
  
    @Column('decimal')
    salary: number;
  
    // @Column()
    // skills: string;
  }
  