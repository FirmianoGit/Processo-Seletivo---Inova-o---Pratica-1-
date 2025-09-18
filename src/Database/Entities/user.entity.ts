import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn({type: 'int', name: 'id'})
  Id: number;

  @Column({ type: 'varchar', length: 100 })
  Nome: string;

  @Column({ type: 'varchar', length: 100 })
  Senha: number;

  @Column({ type: 'bool'})
  IsAdmin: number;

  @Column({ type: 'varchar', length: 100 })
  Email: number;
}