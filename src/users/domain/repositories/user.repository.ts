import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
    createUser(user: UserEntity): Promise<void>;
    findByEmail(email: string):Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
}