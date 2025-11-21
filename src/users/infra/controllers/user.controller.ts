import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/users/application/services/user.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @ApiBody({
        type: CreateUserDto,
        examples: {
            example: {
                value: {
                    firstName: "Peter",
                    lastName: "Parker",
                    email: "parker04@gmail.com",
                    password: "12345678"
                }
            }
        }
    })
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }
}