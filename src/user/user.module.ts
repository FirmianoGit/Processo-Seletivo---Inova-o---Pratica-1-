import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/Database/data-base.module';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
