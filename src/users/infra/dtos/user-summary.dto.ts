import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UserSummaryDto {
    @ApiProperty({
        description: 'id'
    })
    @IsNumber()
    id: number;
    @ApiProperty({
        description: 'firstname'
    })
    @IsString()
    firstName: string;
    @ApiProperty({
        description: 'lastname'
    })
    @IsString()
    lastName: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}