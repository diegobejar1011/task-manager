import * as Joi from "joi";
import { EnvEntity } from "../entities/env.entity";

export const envValidator = Joi.object<EnvEntity>({
    SERVER_PORT: Joi.number().default(3000),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required()
}).unknown(true);