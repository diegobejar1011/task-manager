import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateCommentDto } from "./create-comment.dto";

export class CreateTaskDto {
    @ApiProperty({
        description: "title of task",
        required: true
    })
    @IsString()
    title: string;
    @ApiProperty({
        description: "descrption of task",
        required: true
    })
    @IsString()
    description: string;
    @ApiProperty({
        description: "submission date of task"
    })
    @IsDateString()
    submissionDate: string;
    @ApiProperty({
        description: "comments of task",
        type: CreateCommentDto,
        isArray: true
    })
    @IsOptional()
    @IsArray()
    comments?: CreateCommentDto[];
    @ApiProperty({
        description: "tags of task",
        type: 'number',
        isArray: true
    })
    @IsOptional()
    @IsArray()
    tagIds?: number[];
    @ApiProperty({
        description: "user's id who create task",
        required: true
    })
    @IsNumber()
    userId: number; 
}


