import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { PaginationEntity } from "../entities/pagination.entity";

export const PaginationParams = createParamDecorator((data, ctx: ExecutionContext): PaginationEntity => {
    const req: Request = ctx.switchToHttp().getRequest();

    const page = Math.max(1, Number(req.query.page) || 1);
    const size = Math.min(100, Math.max(1, Number(req.query.size) || 10));

    const limit = size;
    const offset = (page - 1) * limit;
    return {
        page,
        limit,
        size,
        offset
    };
});