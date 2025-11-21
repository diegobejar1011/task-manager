import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class TagEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 24})
    title: string;
}