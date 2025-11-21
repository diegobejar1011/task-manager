import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { EncryptRepositoryImpl } from "../infra/repositories/encrypt.repository.impl";
import { EncryptRepository } from "../domain/repositories/encrypt.repository";

@Injectable()
export class EncryptService {
    constructor(
        @Inject(EncryptRepositoryImpl)
        private readonly encryptRepository: EncryptRepository
    ) {}

    async encrypt(password: string): Promise<string> {
        try {
            return await this.encryptRepository.encrypt(password);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async compare(password: string, passwordEncrypted: string): Promise<boolean> {
        try {
            return await this.encryptRepository.compare(password, passwordEncrypted);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}