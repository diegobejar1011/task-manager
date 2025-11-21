import { Inject, Injectable } from "@nestjs/common";
import { TaskRepository } from "src/task/domain/repositories/task.repository";
import { TaskRepositoryImpl } from "src/task/infra/repositories/task.repository.impl";
import { TaskAppMapper } from "../mappers/task-app.mapper";
import { CommentEntity, TagEntity, TaskEntity } from "src/task/domain/entities";
import { CreateTaskDto, TaskDetailDto, TaskSummaryDto, UpdateTaskDto } from "../dtos";

@Injectable()
export class TaskService {
    constructor(
        @Inject(TaskRepositoryImpl)
        private readonly taskRepository: TaskRepository,
        private readonly taskAppMapper: TaskAppMapper
    ) {}

    async findAll(): Promise<TaskSummaryDto[]> {
        const tasks = await this.taskRepository.findAll();
        return this.taskAppMapper.toTaskSummaryDtoList(tasks);
    }

    async findOne(id: number): Promise<TaskDetailDto> {
        const task = await this.taskRepository.findOne(id);
        return this.taskAppMapper.toTaskDetailDto(task);
    }

    async create(createTaskDto: CreateTaskDto): Promise<void> {

        const newTask: TaskEntity = new TaskEntity(
            createTaskDto.title,
            createTaskDto.description,
            false,
            null,
            createTaskDto.comments.map((c) => new CommentEntity(c.content, new Date())),
            createTaskDto.tagIds.map((id) => new TagEntity(id))
        );

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
