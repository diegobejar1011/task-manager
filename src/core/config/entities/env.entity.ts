export interface EnvEntity {
    SERVER_PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    SALTS: number;
    SECRET_KEY: string;
    EXPIRES_IN: string;
}