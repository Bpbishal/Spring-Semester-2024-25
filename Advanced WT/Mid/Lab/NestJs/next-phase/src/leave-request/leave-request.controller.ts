import { Controller, Post, Body, UseGuards, Req, Get, Patch, Param } from '@nestjs/common';
import { LeaveRequestsService } from './leave-request.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('leave-requests')
@UseGuards(JwtAuthGuard)
export class LeaveRequestsController {
  constructor(private readonly leaveRequestsService: LeaveRequestsService) {}

  // Apply for a leave
  @Post()
  applyLeave(@Body() body: any, @Req() req) {
    return this.leaveRequestsService.applyLeave(body, req.user.id); 
  }

  @Get('me')
  viewOwnLeaves(@Req() req) {
    return this.leaveRequestsService.viewOwnLeaves(req.user.id);
  }

  // Admin view all leave requests
  @Get('all')
  viewAllLeaves() {
    return this.leaveRequestsService.viewAllLeaves();
  }
  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body() body: any) {
    return this.leaveRequestsService.updateLeaveStatus(id, body.status);
  }
}

