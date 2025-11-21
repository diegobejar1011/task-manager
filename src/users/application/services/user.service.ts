import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserRepository } from "src/users/domain/repositories/user.repository";
import { UserRepositoryImpl } from "src/users/infra/repositories/user.repository.impl";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { EncryptService } from "src/core/security/application/encrypt.service";

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepositoryImpl)
        private readonly userRepository: UserRepository,
        private readonly encryptService: EncryptService
    ) {}

    async create(createUser: CreateUserDto): Promise<void> {
        try {
            const encryptedPassword = await this.encryptService.encrypt(createUser.password);

            const newUser: UserEntity = {
                ...createUser,
                password: encryptedPassword
            };

            await this.userRepository.createUser(newUser);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findByEmail(email: string): Promise<UserEntity> {
        try {
            return await this.userRepository.findByEmail(email);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findOne(id: number): Promise<UserEntity> {
        try {
            return await this.userRepository.findOne(id);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

}