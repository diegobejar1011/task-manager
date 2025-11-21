import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 64})
    firstName: string;

    @Column({type: 'varchar', length: 64})
    lastName: string;

    @Column({type: 'varchar', length: 264, unique: true})
    email: string;

    @Column({type: 'varchar', length: 264})
    password: string;
}