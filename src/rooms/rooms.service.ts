import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Sala } from 'src/Database/Entities/sala.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @Inject('SALA_REPOSITORY')
    private readonly SalaRepository: Repository<Sala>
  ) { }
  async create(createRoomDto: CreateRoomDto) {
    // try {
    //   const tarefa = this.SalaRepository.create({ CreateRoomDto });
    //   return await this.SalaRepository.save(tarefa);
    // } catch (error) {
    //   throw new InternalServerErrorException('Erro ao criar tarefa.');
    // }
    return `This action returns all rooms`;
  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
