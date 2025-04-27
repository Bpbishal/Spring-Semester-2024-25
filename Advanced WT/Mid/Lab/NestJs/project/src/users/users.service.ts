export class UsersService{
     users:{id: number,name:string,email:string,gender:string,isMarried:boolean}[]=[
        {id:1, name:'john',email:"john@gmail.com",gender:'male',isMarried:false},
        {id:2, name:'mark',email:"mark@gmail.com",gender:'male',isMarried:true},
        {id:3, name:'penny',email:"penny@gmail.com",gender:'female',isMarried:false}
    ]
    getAllUsers(){
        return this.users;
    }
    getUserById(id:number){
        return this.users.find(x=>x.id===id);
    }
    createUsers(user:{id: number,name:string,email:string,gender:string,isMarried:boolean}){
        this.users.push(user);
    }
}