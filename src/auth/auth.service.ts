import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/Database/Entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserPayload } from '../Common/Auth-models/UserPayload';
import { UserToken } from '../Common/Auth-models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Validar as credenciais do usuário
  async ValidarUsuario(email: string, senha: string) {
    console.log('Validando usuário com email:', email); // Depuração
    const Usuario = await this.userService.findByEmail(email);

    if (!Usuario) {
      console.log('Usuário não encontrado'); // Depuração
      return null;
    }

    const SenhaValida = await bcrypt.compare(senha, Usuario.Senha);

    if (!SenhaValida) {
      console.log('Senha incorreta'); // Depuração
      return null;
    }

    console.log('Usuário autenticado com sucesso'); // Depuração
    return {
      ...Usuario,
      senha: undefined, // Remove a senha do retorno
    };
  }

  // Gerar token JWT para o usuário autenticado
  async login(usuario: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: usuario.Id,
      chave: usuario.Email, // O campo `chave` foi usado no payload
    };

    const jwtToken = this.jwtService.sign(payload); // Corrigido camelCase
    return {
      access_token: jwtToken,
    };
  }
}
