import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/Database/Entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuariosRepository: Repository<User>
  ) { }
  async create(createUsuarioDto: CreateUserDto): Promise<User> {
    try {
      // Criptografar a senha antes de salvar no banco
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createUsuarioDto.Senha, salt);
      console.log(hashedPassword);

      // Substituir a senha pelo hash no DTO
      createUsuarioDto.Senha = hashedPassword;

      // Criar o novo usuário
      const usuario = this.usuariosRepository.create(createUsuarioDto);

      // Salvar no banco de dados
      return await this.usuariosRepository.save(usuario);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email ou nome de usuário já cadastrados.');
      }
      throw new InternalServerErrorException('Erro ao criar usuário.');
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const usuario = await this.usuariosRepository.findOne({
        where: { Email: email },
      });

      if (!usuario) {
        throw new NotFoundException(
          `Usuário com email ${email} não encontrado.`,
        );
      }

      return usuario;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao buscar usuário por email. Detalhes: ' + error.message,
      );
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
