import { EnvEntity } from "./entities/env.entity";
import { envValidator } from "./validators/env.validator"
import 'dotenv/config';

export const getEnvsValues = () => {
    const {value, error} = envValidator.validate(process.env);

    if(error) {
        throw new Error(
            `Error in enviroments variables ${error.message}`
        );
    }

    const envsVars: EnvEntity = value;

    return {
        port: envsVars.SERVER_PORT,
        db: {
            host: envsVars.DB_HOST,
            port: envsVars.DB_PORT,
            user: envsVars.DB_USER,
            pass: envsVars.DB_PASS,
            name: envsVars.DB_NAME
        }
    };
}

export const envsValues = getEnvsValues();