import { CreateCommentDto } from "./create-comment.dto";

export interface CreateTaskDto {
    title: string;
    description: string;
    submissionDate: Date;
    comments?: CreateCommentDto[];
    tagIds?: number[];
    user: {id: number};
}