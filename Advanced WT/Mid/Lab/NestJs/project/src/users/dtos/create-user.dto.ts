import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNumber()
    id:number;
    @IsString({message:"Name should be s string value"})
    @IsNotEmpty()
    @MinLength(3,{message:'Minimum 3 character'})
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    @IsOptional()
    gender?:string;

    @IsBoolean()
    isMarried:boolean;

}