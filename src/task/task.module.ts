import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagEntity } from "./infra/entities/tag.entity";
import { TaskEntity } from "./infra/entities/task.entity";
import { CommentEntity } from "./infra/entities/comment.entity";
import { TaskEntityMapper } from "./infra/mappers/task-entity.mapper";
import { TaskRepositoryImpl } from "./infra/repositories/task.repository.impl";
import { TaskAppMapper } from "./application/mappers/task-app.mapper";
import { TaskService } from "./application/services/task.service";
import { TaskController } from "./infra/controllers/task.controller";
import { TaskInfraMapper } from "./infra/mappers/task-infra.mapper";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TagEntity,
            TaskEntity,
            CommentEntity
        ])
    ],
    providers: [
        TaskEntityMapper,
        TaskRepositoryImpl,
        TaskAppMapper,
        TaskService,
        TaskInfraMapper
    ],
    controllers: [
        TaskController
    ]
})
export class TaskModule {}