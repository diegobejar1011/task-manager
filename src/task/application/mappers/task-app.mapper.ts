import { Injectable } from "@nestjs/common";
import { CommentEntity, TagEntity, TaskEntity } from "src/task/domain/entities";
import { CreateTaskDto, TaskDetailDto, TaskSummaryDto } from "../dtos";
import { CreateCommentDto } from "../dtos/create-comment.dto";
import { UserEntity } from "src/users/domain/entities/user.entity";

@Injectable()
export class TaskAppMapper {

    public toTaskSummaryDto(task: TaskEntity): TaskSummaryDto {
        return {
            id: task.id!,
            title: task.title,
            isCompleted: task.isCompleted,
            submissionDate: task.submissionDate
        }
    }

    public toTaskSummaryDtoList(tasks: TaskEntity[]): TaskSummaryDto[] {
        if(tasks.length == 0) return [];
        return tasks.map(this.toTaskSummaryDto);
    }

    public toTaskDetailDto(task: TaskEntity): TaskDetailDto {
        return {
            title: task.title,
            description: task.description,
            isCompleted: task.isCompleted,
            submissionDate: task.submissionDate,
            comments: task.comments!,
            tags: task.tags!,
            user: task.user!
        }
    }

    private toComment(createCommentDto: CreateCommentDto): CommentEntity {
        return new CommentEntity(createCommentDto.content, new Date());
    }

    private toTag(id: number): TagEntity {
        return new TagEntity(id);
    }
    

    public toTask(createTaskDto: CreateTaskDto, user: UserEntity): TaskEntity {
        return new TaskEntity(
            createTaskDto.title,
            createTaskDto.description,
            false,
            createTaskDto.submissionDate,
            createTaskDto.comments ? createTaskDto.comments.map(this.toComment) : [],
            createTaskDto.tagIds ? createTaskDto.tagIds.map(this.toTag) : [],
            user
        );
    }
}