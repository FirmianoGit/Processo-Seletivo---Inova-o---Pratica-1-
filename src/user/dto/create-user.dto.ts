import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    Nome: string;
    @IsString()
    @IsNotEmpty()
    Senha: string;
    @IsString()
    @IsNotEmpty()
    Email: string;
    @IsBoolean()
    @IsNotEmpty()
    IsAdmin: boolean;
}