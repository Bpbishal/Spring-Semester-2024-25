import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
     users:{id: number,name:string,email:string,gender:string,isMarried:boolean,password:String}[]=[
        {id:1, name:'john',email:"john@gmail.com",gender:'male',isMarried:false,password:'test123'},
        {id:2, name:'mark',email:"mark@gmail.com",gender:'male',isMarried:true,password:'test123'},
        {id:3, name:'penny',email:"penny@gmail.com",gender:'female',isMarried:false,password:'test123'}
    ]
    getAllUsers(){
        return this.users;
    }
    getUserById(id:Number){
        return this.users.find(x=>x.id===id);
    }
    createUsers(user:{id: number,name:string,email:string,gender:string,isMarried:boolean,password:String}){
        this.users.push(user);
    }
}