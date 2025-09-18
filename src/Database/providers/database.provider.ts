import { DataSource } from 'typeorm';
import { Teste } from '../Entities/teste.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
	  const dataSource = new DataSource({
	    type: 'sqlite',
	    database: 'database.sqlite',
	    entities: [
	      __dirname + '/../**/*.entity{.ts,.js}',
		  Teste
	    ],
	    synchronize: true,
	  });

      return dataSource.initialize();
    },
  },
];
