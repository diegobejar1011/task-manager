import { CommentEntity } from "src/task/domain/entities/comment.entity";
import { TagEntity } from "src/task/domain/entities/tag.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";

export interface TaskDetailDto {
        title: string;
        description: string;
        isCompleted: boolean;
        submissionDate: Date;
        comments: CommentEntity[];
        tags: TagEntity[];
        user: UserEntity;
}