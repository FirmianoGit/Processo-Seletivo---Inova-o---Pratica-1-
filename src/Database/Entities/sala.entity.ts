import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Sala')
export class Sala {
  @PrimaryGeneratedColumn({type: 'int', name: 'id'})
  Id: number;

  @PrimaryColumn()
  @Column({ type: 'varchar', length: 100 })
  Nome: string;

  @Column({ type: 'date', length: 100 })
  Comeco: Date

  @Column({ type: 'date', length: 100 })
  Termino: Date

  @Column({ type: 'varchar', length: 100 })
  Email: number;

  @Column({type: 'varchar', length: 255})
  Descricao: string;
}