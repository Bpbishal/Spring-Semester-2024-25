export class UsersService{
     users:{id: number,name:string,age:number,gender:string,isMarried:boolean}[]=[
        {id:1, name:'john',age:25,gender:'male',isMarried:false},
        {id:2, name:'mark',age:28,gender:'male',isMarried:true},
        {id:3, name:'penny',age:25,gender:'female',isMarried:false}
    ]
    getAllUsers(){
        return this.users;
    }
    getUserById(id:number){
        return this.users.find(x=>x.id===id);
    }
    createUsers(user:{id: number,name:string,age:number,gender:string,isMarried:boolean}){
        this.users.push(user);
    }
}