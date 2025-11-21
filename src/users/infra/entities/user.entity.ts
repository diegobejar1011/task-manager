import { CommentEntity } from "src/task/infra/entities/comment.entity";
import { TaskEntity } from "src/task/infra/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => TaskEntity, task => task.user)
    tasks: TaskEntity[];

    @OneToMany(() => CommentEntity, comment => comment.user)
    comments: CommentEntity[];
}