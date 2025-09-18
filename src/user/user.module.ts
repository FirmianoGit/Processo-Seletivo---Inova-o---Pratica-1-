import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/Database/data-base.module';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
