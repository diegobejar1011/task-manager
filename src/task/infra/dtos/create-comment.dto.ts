import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({
        description: 'content of comment'
    })
    @IsString()
    content: string;
}