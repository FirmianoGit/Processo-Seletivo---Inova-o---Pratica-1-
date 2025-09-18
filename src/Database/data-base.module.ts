import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.provider';
import { EntityProviders } from './providers/entities.provider';

@Module({
  providers: [...EntityProviders, ...databaseProviders],
  exports: [...EntityProviders],
})
export class DatabaseModule {}
