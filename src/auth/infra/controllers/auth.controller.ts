import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/auth/application/services/auth.service";
import { LoginDto } from "../dtos/login.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @ApiBody({
        type: LoginDto,
        examples: {
            example: {
                value: {
                    email: "parker04@gmail.com",
                    password: "12345678"
                }
            }
        }
    })
    @Post()
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}