import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/users/domain/repositories/user.repository";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UserEntity as User } from "src/users/domain/entities/user.entity";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser(user: UserEntity): Promise<void> {
        try {
            const newUser = this.userRepository.create(user);
            await this.userRepository.save(newUser);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    
    async findByEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({where:{email}});
            if(!user) throw new NotFoundException("Not found user!");
            return user;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}