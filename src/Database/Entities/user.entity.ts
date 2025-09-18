import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teste')
export class User {
  @PrimaryGeneratedColumn({type: 'int', name: 'id'})
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'varchar', length: 100 })
  senha: number;

  @Column({ type: 'bool'})
  IsAdmin: number;

  @Column({ type: 'varchar', length: 100 })
  email: number;
}