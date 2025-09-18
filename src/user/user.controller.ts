import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsPublic } from 'src/Common/Decorators/is-public.decorator';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('usuarios')
export class UserController {
    constructor(private readonly usuarioService: UserService) { }

    @IsPublic()
    @Post()
    create(@Body() createUsuarioDto: CreateUserDto) {
        console.log(createUsuarioDto);
        return this.usuarioService.create(createUsuarioDto);
    }
} 
