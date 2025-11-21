import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: "firstname of user",
    })
    @IsString()
    firstName: string;
    @ApiProperty({
        description: "firstname",
    })
    @IsString()
    lastName: string;
    @ApiProperty({
        description: "firstname",
    })
    @IsEmail({}, {message: 'Invalid email!'})
    email: string;
    @ApiProperty({
        description: "firstname",
    })
    @IsString()
    password: string;
}