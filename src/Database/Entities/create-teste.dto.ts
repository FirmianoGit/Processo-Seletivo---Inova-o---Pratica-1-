import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTesteDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @IsInt()
    idade?: number;
}