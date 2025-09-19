import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateRoomDto {
    @IsString()
    @IsNotEmpty()
    Nome: string;
    @IsInt()
    @IsNotEmpty()
    Capacidade: number;
    @IsString()
    @IsNotEmpty()
    Descricao: string;
}
