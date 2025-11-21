import { BadRequestException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { AuthRepository } from "src/auth/domain/repositories/auth.repository";
import { AuthRepositoryImpl } from "src/auth/infra/repositories/auth.repository.impl";
import { LoginDto } from "../dtos/login.dto";
import { EncryptRepositoryImpl } from "src/core/security/infra/repositories/encrypt.repository.impl";
import { EncryptRepository } from "src/core/security/domain/repositories/encrypt.repository";
import { UserRepositoryImpl } from "src/users/infra/repositories/user.repository.impl";
import { UserRepository } from "src/users/domain/repositories/user.repository";
import { PayloadEntity } from "src/auth/domain/entities/payload.entity";
import { UserService } from "src/users/application/services/user.service";
import { EncryptService } from "src/core/security/application/encrypt.service";

@Injectable()
export class AuthService {
    constructor(
        @Inject(AuthRepositoryImpl)
        private readonly authRepository: AuthRepository,
        private readonly encryptService: EncryptService,
        private readonly userService: UserService
    ) {}

    async login(login: LoginDto): Promise<string> {
        try {
            const user = await this.userService.findByEmail(login.email);

            if(await this.encryptService.compare(login.password, user.password)) {
                return this.authRepository.generateToken(new PayloadEntity(user.id!, user.email));
            }
            throw new BadRequestException("Wrong credentials!");
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}