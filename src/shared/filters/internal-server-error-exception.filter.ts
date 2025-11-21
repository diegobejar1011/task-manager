import { ArgumentsHost, Catch, ExceptionFilter, InternalServerErrorException } from "@nestjs/common";
import e from "express";

@Catch(InternalServerErrorException)
export class InternalServerErrorExceptionFilter implements ExceptionFilter<InternalServerErrorException> {
    catch(exception: InternalServerErrorException, host: ArgumentsHost) {
        throw new InternalServerErrorException(exception.message);
    }
}