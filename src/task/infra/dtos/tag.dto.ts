import { ApiProperty } from "@nestjs/swagger";

export class TagDto {
    @ApiProperty({
        description: "id of tag"
    })
    id: number;
    @ApiProperty({
        description: "title of tag"
    })
    title: string;

    constructor(
        id: number,
        title: string
    ) {
        this.id = id;
        this.title = title;
    }
}