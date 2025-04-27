import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto{
    @IsNumber()
    @IsOptional()
    id?:number;
    @IsString({message:"Name should be s string value"})
    @IsNotEmpty()
    @MinLength(3,{message:'Minimum 3 character'})
    @IsOptional()
    name?:string;
    @IsEmail()
    @IsOptional()
    email?:string;
    @IsString()
    @IsOptional()
    gender?:string;

    @IsBoolean()
    @IsOptional()
    isMarried?:boolean;

}