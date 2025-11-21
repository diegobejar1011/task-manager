import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity as Task } from "src/task/domain/entities/task.entity";
import { TaskRepository } from "src/task/domain/repositories/task.repository";
import { TaskEntity } from "../entities/task.entity";
import { In, Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { TaskEntityMapper } from "../mappers/task-entity.mapper";
import { TagEntity } from "../entities/tag.entity";
import { PaginationEntity } from "src/shared/entities/pagination.entity";

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>,
        private readonly taskEntityMapper: TaskEntityMapper,
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ) {}

    async findAll(pagination: PaginationEntity): Promise<Task[]> {
        try {

            const tasks: TaskEntity[] = await this.taskRepository.find({
                select: {id: true, title: true, isCompleted: true, submissionDate: true},
                skip: pagination.offset,
                take: pagination.limit
            });

            if (tasks.length == 0) return [];
            return this.taskEntityMapper.toDomainList(tasks);
        } catch (error) {
            console.error(error);
            throw new HttpException('Failed!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findOne(id: number): Promise<Task> {
        try {
            const task = await this.taskRepository.findOne(
                {where: {id}, relations: {comments: true, tags: true, user: true}}
            );
            if (!task) throw new NotFoundException("Not found task!");
            return this.taskEntityMapper.toDomain(task);
        } catch (error) {
            console.error(error);
            throw new HttpException('Failed!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(task: Task): Promise<void> {
        try {

            let tags = task.tags ? await this.tagRepository.find({where: {id: In(task.tags.map((t) => t.id))}}) : []; 

            const taskEntity = this.taskRepository.create({
                title: task.title,
                description: task.description,
                isCompleted: task.isCompleted,
                submissionDate: task.submissionDate,
                comments: task.comments,
                tags,
                user: {id: task.user!.id}
            });

            await this.taskRepository.save(taskEntity);
        } catch (error) {
            console.error(error);
            throw new HttpException('Failed!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(task: Task): Promise<void> {
        try {
            await this.taskRepository.save(task);
        } catch (error) {
            console.error(error);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.taskRepository.delete({id});
        } catch (error) {
            console.error(error);
            throw new HttpException('Failed!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}