import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    controllers:[UsersController],
    providers: [UsersService],
    exports:[UsersService] //controllers can not be exportable
})
export class UsersModule{

}