import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { text } from 'stream/consumers';

@Injectable()
export class TweetService {
    constructor(private readonly userService:UsersService){}

    tweets:{text:String,date:Date,userId:Number}[]=
    [
        {text:'tweet',date:new Date('2025-04-27'),userId:1},
        {text:'some tweet',date:new Date('2025-04-28'),userId:2},
        {text:'some other tweet',date:new Date('2025-04-29'),userId:3}
    ];
    getTweets(userId:Number){
        const user=this.userService.getUserById(userId)
        const tweets= this.tweets.filter(t=>t.userId===userId)
        const response=tweets.map(t=>{return{text:t.text,date:t.date,name:user?.name}})
        return response;
    }
}
