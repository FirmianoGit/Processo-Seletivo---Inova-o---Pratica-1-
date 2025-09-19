import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { DatabaseModule } from 'src/Database/data-base.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
