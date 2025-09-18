import { DataSource } from 'typeorm';

const createRepositoryProvider = (entity: any, token: string) => ({
  provide: token,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(entity),
  inject: ['DATA_SOURCE'],
});

export const EntityProviders = [
  createRepositoryProvider(require('../Entities/user.entity').User, 'USUARIO_REPOSITORY'),
];
