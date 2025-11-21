import { UserEntity } from "src/users/domain/entities/user.entity";
import { CommentEntity } from "./comment.entity";
import { TagEntity } from "./tag.entity";

export class TaskEntity {
    id?: number;
    title: string;
    description: string;
    isCompleted: boolean;
    submissionDate: Date;
    comments?: CommentEntity[];
    tags?: TagEntity[];
    user?: UserEntity;

    constructor(
        title: string,
        description: string,
        isCompleted: boolean,
        submissionDate: Date,
        comments?: CommentEntity[],
        tags?: TagEntity[],
        user?: UserEntity,
        id?: number,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.submissionDate = submissionDate;
        this.comments = comments;
        this.tags = tags;
        this.user = user;
    }
}