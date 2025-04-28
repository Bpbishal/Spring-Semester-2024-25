import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest } from './leave-request.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class LeaveRequestsService {
  constructor(
    @InjectRepository(LeaveRequest)
    private leaveRequestRepository: Repository<LeaveRequest>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async applyLeave(data: any, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found'); 
    }
    const leave = this.leaveRequestRepository.create({
      ...data,
      user: user,
    });
    return this.leaveRequestRepository.save(leave);
  }
  viewOwnLeaves(userId: number) {
    return this.leaveRequestRepository.find({
      where: { user: { id: userId } },
      relations: ['user'], 
    });
  }
  viewAllLeaves() {
    return this.leaveRequestRepository.find({ relations: ['user'] });
  }
  updateLeaveStatus(id: number, status: 'approved' | 'rejected') {
    return this.leaveRequestRepository.update(id, { status });
  }
}
