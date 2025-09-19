import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Reserva } from "./reserva.entity";

@Entity('Sala')
export class Sala {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    Id: number;

    @PrimaryColumn()
    @Column({ type: 'varchar', length: 100 })
    Nome: string;

    @Column({ type: 'int' })
    Capacidade: number;

    @Column({ type: 'varchar', length: 255 })
    Descricao: string;

    @ManyToOne(() => Reserva, (reserva) => reserva.UserId)
    Reserva: Reserva[];
}
