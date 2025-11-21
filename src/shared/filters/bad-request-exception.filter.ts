import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter<BadRequestException> {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        throw new BadRequestException(exception.message);
    }
    
}