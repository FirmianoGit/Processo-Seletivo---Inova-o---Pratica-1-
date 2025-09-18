import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teste')
export class Teste {
  @PrimaryGeneratedColumn({type: 'int', name: 'id'})
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'int', nullable: true })
  idade: number;
}
