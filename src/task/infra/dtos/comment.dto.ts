import { ApiProperty } from "@nestjs/swagger";

export class CommentDto {
    @ApiProperty({
        description: "id of comment"
    })
    id: number;
    @ApiProperty({
        description: "content of comment"
    })
    content: string;
    @ApiProperty({
        description: "publish date of comment"
    })
    publishDate: string;

    constructor(
        id: number,
        content: string,
        publishDate: string
    ) {
        this.id = id;
        this.content = content;
        this.publishDate = publishDate;
    }
}