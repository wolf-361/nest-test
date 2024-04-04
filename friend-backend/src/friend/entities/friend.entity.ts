import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Friend {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    hobby: string;

    @Column()
    phone: string;

    @Column()
    picture: string;
}
