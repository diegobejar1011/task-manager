import { ApiProperty } from "@nestjs/swagger";
import { CommentDto } from "./comment.dto";
import { TagDto } from "./tag.dto";

export class TaskDetailDto {
    @ApiProperty({
        description: "title of task"
    })
    title: string;
    @ApiProperty({
        description: "description of task"
    })
    description: string;
    @ApiProperty({
        description: "completed flag of task"
    })
    completed: boolean;
    @ApiProperty({
        description: "submission date of task"
    })
    submissionDate: string | null;
    @ApiProperty({
        description: "task's comments list",
        type: [CommentDto]
    })
    comments: CommentDto[];
    @ApiProperty({
        description: "task's tags list",
        type: [TagDto]
    })
    tags: TagDto[];

    constructor(
        title: string,
        description: string,
        completed: boolean,
        submissionDate: string | null,
        comments: CommentDto[],
        tags: TagDto[]
    ) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.submissionDate = submissionDate;
        this.comments = comments;
        this.tags = tags;
    }
}