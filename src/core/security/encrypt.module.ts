import { Module } from "@nestjs/common";
import { EncryptRepositoryImpl } from "./infra/repositories/encrypt.repository.impl";
import { EncryptService } from "./application/encrypt.service";

@Module({
    providers: [
        EncryptRepositoryImpl,
        EncryptService
    ],
    exports: [
        EncryptService
    ]
})
export class EncryptModule{}