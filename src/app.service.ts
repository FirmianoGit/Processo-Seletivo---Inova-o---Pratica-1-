import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Teste } from './Database/Entities/teste.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('TESTE_REPOSITORY')
    private readonly testeRepository: Repository<Teste>) { }
  async getHello() {
    await this.testeRepository.save({ nome: 'Firmiano', idade: 30 });
  }
}
