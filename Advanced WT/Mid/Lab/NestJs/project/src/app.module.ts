import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TweetController } from './tweet/tweet.controller';
import { TweetService } from './tweet/tweet.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule,TweetModule, AuthModule,TypeOrmModule.forRoot({
    type:'postgres',
    entities:[],
    synchronize:true,
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'root',
    database:'nestjs'
  })],
  controllers: [AppController,UsersController,TweetController],
  providers: [AppService,UsersService,TweetService],
})
export class AppModule {}
