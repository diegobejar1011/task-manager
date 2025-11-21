import { Module } from "@nestjs/common";
import { UserRepositoryImpl } from "./infra/repositories/user.repository.impl";
import { UserService } from "./application/services/user.service";
import { UserController } from "./infra/controllers/user.controller";
import { EncryptModule } from "src/core/security/encrypt.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./infra/entities/user.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ]),
        EncryptModule
    ],
    providers: [
        UserRepositoryImpl,
        UserService
    ],
    controllers: [
        UserController
    ],
    exports: [
        UserService
    ]
})
export class UserModule {}