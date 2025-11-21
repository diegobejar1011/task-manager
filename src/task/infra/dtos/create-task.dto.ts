import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";
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
        description: "comments of task",
        type: CreateCommentDto,
        isArray: true,
        required: true
    })
    @IsArray()
    comments: CreateCommentDto[];
    @ApiProperty({
        description: "tags of task",
        type: 'number',
        isArray: true,
        required: true
    })
    tagIds: number[];
}


