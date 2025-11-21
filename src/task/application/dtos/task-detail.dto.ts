import { CommentEntity } from "src/task/domain/entities/comment.entity";
import { TagEntity } from "src/task/domain/entities/tag.entity";

export interface TaskDetailDto {
        title: string;
        description: string;
        isCompleted: boolean;
        submissionDate: Date | null;
        comments: CommentEntity[];
        tags: TagEntity[];
}