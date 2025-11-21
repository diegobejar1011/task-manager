import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { EncryptRepository } from "../../domain/repositories/encrypt.repository";
import { envsValues } from "src/core/config/getEnvs";
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptRepositoryImpl implements EncryptRepository {

    private salts = envsValues.salts;

    async encrypt(password: string): Promise<string> {
        try {
            return await bcrypt.hash(password, this.salts);
        } catch (error) {
            throw new InternalServerErrorException(error.messsage);
        }
    }

    async compare(password: string, encryptedPassword: string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, encryptedPassword);
        } catch (error) {
            throw new InternalServerErrorException(error.messsage);
        }
    }
}