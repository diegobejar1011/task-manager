import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { TagEntity } from "./tag.entity";

@Entity('tasks')
export class TaskEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 64})
    title: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'tinyint', default: 0})
    isCompleted: boolean;

    @Column({type: 'date', nullable: true})
    submissionDate: Date | null;

    @OneToMany(() => CommentEntity, comment => comment.task, {cascade: ['insert', 'remove']})
    comments: CommentEntity[];

    @ManyToMany(() => TagEntity)
    @JoinTable({
        name: 'task_tag',
        joinColumn: {name: 'task_id'},
        inverseJoinColumn: {name: 'tag_id'}
    })
    tags: TagEntity[];

}