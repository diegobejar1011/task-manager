import { Inject, Injectable } from "@nestjs/common";
import { TaskRepository } from "src/task/domain/repositories/task.repository";
import { TaskRepositoryImpl } from "src/task/infra/repositories/task.repository.impl";
import { TaskAppMapper } from "../mappers/task-app.mapper";
import { CommentEntity, TagEntity, TaskEntity } from "src/task/domain/entities";
import { CreateTaskDto, TaskDetailDto, TaskSummaryDto, UpdateTaskDto } from "../dtos";
import { PaginationEntity } from "src/shared/entities/pagination.entity";
import { CreateCommentDto } from "src/task/infra/dtos";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { UserService } from "src/users/application/services/user.service";

@Injectable()
export class TaskService {
    constructor(
        @Inject(TaskRepositoryImpl)
        private readonly taskRepository: TaskRepository,
        private readonly taskAppMapper: TaskAppMapper,
        private readonly userService: UserService
    ) {}

    async findAll(pagination: PaginationEntity): Promise<TaskSummaryDto[]> {
        const tasks = await this.taskRepository.findAll(pagination);
        return this.taskAppMapper.toTaskSummaryDtoList(tasks);
    }

    async findOne(id: number): Promise<TaskDetailDto> {
        const task = await this.taskRepository.findOne(id);
        return this.taskAppMapper.toTaskDetailDto(task);
    }

    async create(createTaskDto: CreateTaskDto): Promise<void> {

        const user = await this.userService.findOne(createTaskDto.user.id);

        const newTask: TaskEntity = this.taskAppMapper.toTask(createTaskDto, user);

        await this.taskRepository.create(newTask);
    }

    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<void> {
        const savedTask = await this.taskRepository.findOne(id);

        const updatedTask = {
            ...savedTask,
            ...updateTaskDto
        };

        await this.taskRepository.update(updatedTask);
    }

    async delete(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}
