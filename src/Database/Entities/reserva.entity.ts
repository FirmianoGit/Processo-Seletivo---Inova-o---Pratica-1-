import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Sala } from "./sala.entity";

@Entity('Reserva')
export class Reserva {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    Id: number;

    @Column({ type: 'date'})
    Comeco: Date

    @Column({ type: 'date'})
    Termino: Date

    @Column({ type: 'varchar', length: 255 })
    Proposito: string;

    @OneToMany(() => User, (user) => user.Reserva)
    UserId: number;

    @OneToMany(() => Sala, (sala) => sala.Reserva)
    SalaId: number;
}