import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => ({
                success: true,
                data
            })),
            catchError((error) => {
                return throwError(() => ({
                    success: false,
                    message: error.message,
                    statusCode: error.status,
                }));
            })
        );
    }

}