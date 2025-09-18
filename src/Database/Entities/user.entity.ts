import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    Id: number;

    @Column({ type: 'varchar', length: 100 })
    Nome: string;

    @Column({ type: 'varchar', length: 100 })
    Senha: number;

    @Column({ type: 'boolean' })
    IsAdmin: boolean;

    @Column({ type: 'varchar', length: 100 })
    Email: number;

    @ManyToOne(() => Reserva, (reserva) => reserva.UserId)
    Reserva: Reserva[];
}