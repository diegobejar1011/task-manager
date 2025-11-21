import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { TagEntity } from "./tag.entity";
import { UserEntity } from "src/users/infra/entities/user.entity";

@Entity('tasks')
export class TaskEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 64})
    title: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'boolean', default: false})
    isCompleted: boolean;

    @Column({type: 'date'})
    submissionDate: Date;

    @OneToMany(() => CommentEntity, comment => comment.task, {cascade: ['insert', 'remove']})
    comments: CommentEntity[];

    @ManyToMany(() => TagEntity)
    @JoinTable({
        name: 'task_tag',
        joinColumn: {name: 'task_id'},
        inverseJoinColumn: {name: 'tag_id'}
    })
    tags: TagEntity[];

    @ManyToOne(() => UserEntity, user => user.tasks)
    @JoinColumn({name: 'user_id'})
    user: UserEntity;

}