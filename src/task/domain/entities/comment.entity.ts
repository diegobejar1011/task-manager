import { UserEntity } from "src/users/domain/entities/user.entity";

export class CommentEntity {
    id?: number;
    content: string;
    publishDate: Date;
    user?: UserEntity;

    constructor(
        content: string,
        publishDate: Date,
        user?: UserEntity,
        id?: number
    ) {
        this.content = content;
        this.publishDate = publishDate;
        this.id = id;
        this.user = user;
    }
}