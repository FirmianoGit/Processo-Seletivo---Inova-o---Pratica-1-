import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database/data-base.module';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './rooms/rooms.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, AuthModule, RoomsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
