import { CommentEntity, TaskEntity } from "src/task/domain/entities";

export class UserEntity {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    tasks?: TaskEntity[];
    comments?: CommentEntity[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        tasks?: TaskEntity[],
        comments?: CommentEntity[],
        id?: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.id = id;
        this.tasks = tasks;
        this.comments = comments;
    }
}