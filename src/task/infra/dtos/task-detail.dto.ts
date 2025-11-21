import { ApiProperty } from "@nestjs/swagger";
import { CommentDto } from "./comment.dto";
import { TagDto } from "./tag.dto";
import { UserSummaryDto } from "src/users/infra/dtos/user-summary.dto";

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
    @ApiProperty({
        description: "user who create task",
        type: UserSummaryDto
    })
    user: UserSummaryDto;

    constructor(
        title: string,
        description: string,
        completed: boolean,
        submissionDate: string,
        comments: CommentDto[],
        tags: TagDto[],
        user: UserSummaryDto
    ) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.submissionDate = submissionDate;
        this.comments = comments;
        this.tags = tags;
        this.user = user;
    }
}