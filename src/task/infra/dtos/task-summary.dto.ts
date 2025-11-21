import { ApiProperty } from "@nestjs/swagger";

export class TaskSummaryDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    completed: boolean;
    @ApiProperty()
    submissionDate: string | null;

    constructor(
        id: number,
        title: string,
        completed: boolean,
        submissionDate: string | null
    ) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.submissionDate = submissionDate;
    }
}