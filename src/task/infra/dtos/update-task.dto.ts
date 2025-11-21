import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateTaskDto {
    @ApiProperty({
        description: 'title of task'
    })
    @IsString()
    title: string;
    @ApiProperty({
        description: 'description of task'
    })
    @IsString()
    description: string;
    @ApiProperty({
        description: 'completed flag of task'
    })
    @IsString()
    completed: boolean;
    @ApiProperty({
        description: 'submission date of task'
    })
    @IsString()
    submissionDate: string;
}