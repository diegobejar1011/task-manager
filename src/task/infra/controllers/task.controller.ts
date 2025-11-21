import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "src/task/application/services/task.service";
import { CreateTaskDto } from "../dtos/create-task.dto";
import { TaskInfraMapper } from "../mappers/task-infra.mapper";
import { TaskSummaryDto } from "../dtos/task-summary.dto";
import { ApiBody, ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { TaskDetailDto, UpdateTaskDto } from "../dtos";
import { PaginationParams } from "src/shared/decorators/pagination-params.decorator";
import { PaginationEntity } from "src/shared/entities/pagination.entity";

@ApiTags('tasks')
@Controller("/tasks")
export class TaskController {
    constructor(
        private readonly taskServices: TaskService,
        private readonly taskInfraMapper: TaskInfraMapper
    ) {}

    
    @ApiOkResponse({
        description: 'list of tasks',
        type: [TaskSummaryDto]
    })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'page of items' })
    @ApiQuery({ name: 'size', required: false, type: Number, description: 'item list size' })
    @Get()
    public async getAll(
        @PaginationParams() pagination: PaginationEntity
    ): Promise<TaskSummaryDto[]> {
        const tasks = await this.taskServices.findAll(pagination);
        return this.taskInfraMapper.toTaskSummaryDtoList(tasks);
    }

    @ApiOkResponse({
        description: 'details of task',
        type: TaskDetailDto,
    })
    @Get(':id')
    public async getById(@Param('id') id: number): Promise<TaskDetailDto> {
        const task = await this.taskServices.findOne(id);
        return this.taskInfraMapper.toTaskDetailDto(task);
    }

    @ApiBody({
        type: CreateTaskDto,
        examples: {
            example: {
                value: {
                    title: 'Example task title to test POST',
                    description: 'Example task description to test POST endpoint',
                    completed: false,
                    submissionDate: '2025-12-01',
                    comments: [
                    {
                        content: 'This comment is a test to test POST',
                    },
                    {
                        content: 'This comment is a test to test POST',
                    }
                    ],
                    tagIds: [1]
                }
            }
        }
    })
    @Post()
    public async create(@Body() createTaskDto: CreateTaskDto) {
        const createTask = this.taskInfraMapper.toCreateTask(createTaskDto);
        await this.taskServices.create(createTask);
    }

    @ApiBody({
        type: UpdateTaskDto,
        examples: {
            example: {
                value: {
                    title: 'Updated task title to test PUT',
                    description: 'Updated task description to test PUT endpoint',
                    completed: true,
                    submissionDate: '2025-12-01'
                }
            }
        }
    })
    @Put(':id')
    public async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
        await this.taskServices.update(id, this.taskInfraMapper.toUpdateTask(updateTaskDto));
    }

    @Delete(':id')
    public async delete(@Param('id') id: number) {
        await this.taskServices.delete(id);
    }

}