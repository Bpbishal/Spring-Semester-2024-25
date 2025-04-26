import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    @Get()
    getUsers(@Query() query:any){
        const usersSerice=new UsersService();
        if(query.gender){
            return usersSerice.getAllUsers().filter(u=>u.gender===query.gender);
        }
        return usersSerice.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id:any){
       
        const usersSerice=new UsersService();
        return usersSerice.getUserById(+id)  ;

    }
    @Post()
    createUsers(){
        const user={id:3,name:'marry',age:21,gender:'female',isMarried:false};
        const usersSerice=new UsersService();
        usersSerice.createUsers(user);
        return "New user created!"
    }
}