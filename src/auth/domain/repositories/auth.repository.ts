import { PayloadEntity } from "../entities/payload.entity";

export interface AuthRepository {
    generateToken(payload: PayloadEntity): string;
}