import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { AuthRepositoryImpl } from "./infra/repositories/auth.repository.impl";
import { AuthService } from "./application/services/auth.service";
import { AuthController } from "./infra/controllers/auth.controller";
import { EncryptModule } from "src/core/security/encrypt.module";
import { JwtModule } from "@nestjs/jwt";
import { envsValues } from "src/core/config/getEnvs";
import { JwtGuard } from "./infra/guards/jwt.guard";

@Module({
    imports: [
        JwtModule.register({
            secret: envsValues.secretKey,
            signOptions: {
                expiresIn: '1h'
            }
        }),
        UserModule, 
        EncryptModule
    ],
    providers: [
        AuthRepositoryImpl,
        AuthService,
        JwtGuard
    ],
    controllers: [
        AuthController,
    ],
    exports: [
        JwtModule,
        JwtGuard
    ]
})
export class AuthModule {}