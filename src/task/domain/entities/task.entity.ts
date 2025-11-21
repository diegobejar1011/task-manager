import { CommentEntity } from "./comment.entity";
import { TagEntity } from "./tag.entity";

export class TaskEntity {
    id?: number;
    title: string;
    description: string;
    isCompleted: boolean;
    submissionDate: Date | null;
    comments: CommentEntity[];
    tags: TagEntity[];

    constructor(
        title: string,
        description: string,
        isCompleted: boolean,
        submissionDate: Date | null,
        comments: CommentEntity[],
        tags: TagEntity[],
        id?: number
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.submissionDate = submissionDate;
        this.comments = comments;
        this.tags = tags;
    }
}