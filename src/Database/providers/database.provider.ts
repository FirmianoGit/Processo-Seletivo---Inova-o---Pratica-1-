import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
	  const dataSource = new DataSource({
	    type: 'sqlite',
	    database: 'database.sqlite',
	    entities: [
	      __dirname + '/../**/*.entity{.ts,.js}',
		  //TEM QUE IMPORTAR AS ENTIDADES AQUI NAO ESQUECER, POR ALGUM MOTIVO O AUTO IMPORT NAO
		  //ESTA DANDO CERTO CORRIGIR DEPOIS
	    ],
	    synchronize: true,
	  });

      return dataSource.initialize();
    },
  },
];
