import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, NotFoundException } from "@nestjs/common";
import { response } from "express";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter<NotFoundException> {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        throw new NotFoundException(exception.message);
    }
}