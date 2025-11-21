import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PayloadEntity } from "src/auth/domain/entities/payload.entity";
import { AuthRepository } from "src/auth/domain/repositories/auth.repository";

@Injectable()
export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly jwt: JwtService
    ) {}

    generateToken(payload: PayloadEntity): string {
        return this.jwt.sign({...payload});
    }
}