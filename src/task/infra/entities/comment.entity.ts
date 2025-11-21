import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity('comments')
export class CommentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 128})
    content: string;

    @Column({type: 'date'})
    publishDate: Date;

    @ManyToOne(() => TaskEntity, task => task.comments, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'task_id'})
    task: TaskEntity;
}