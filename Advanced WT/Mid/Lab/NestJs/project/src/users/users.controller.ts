import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
//  constructor(private readonly usersService: UsersService) {}
//usersService: UsersService;
constructor(private usersService: UsersService ){
  //this.usersService=new UsersService();
}

  @Get()
  getUsers(@Query() query: any) {
    if (query.gender) {
      return this.usersService.getAllUsers().filter(u => u.gender === query.gender);
    }
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    return this.usersService.getUserById(+id);
  }

  @Post()
  //createUsers(@Body(new ValidationPipe()) user:CreateUserDto){
  createUsers(@Body() user: CreateUserDto) {
   // this.usersService.createUsers(user);
    return 'User created';
  }
  @Patch()
  updateUser(@Body() user:UpdateUserDto){
    return 'User updated!'
  }

}
