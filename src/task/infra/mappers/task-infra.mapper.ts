import { Injectable } from "@nestjs/common";
import { CreateTaskDto as CreateTask, TaskDetailDto as TaskDetail, TaskSummaryDto as TaskSummary, UpdateTaskDto as UpdateTask } from "src/task/application/dtos";
import { CommentDto, CreateCommentDto, CreateTaskDto, TagDto, TaskDetailDto, TaskSummaryDto, UpdateTaskDto } from "../dtos";
import { CommentEntity } from "../entities/comment.entity";
import { TagEntity } from "src/task/domain/entities";
import { CreateCommentDto as CreateComment } from "src/task/application/dtos/create-comment.dto";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { UserSummaryDto } from "src/users/infra/dtos/user-summary.dto";

@Injectable()
export class TaskInfraMapper {

    public toCreateTask(createTaskDto: CreateTaskDto): CreateTask {
        return {
            title: createTaskDto.title,
            description: createTaskDto.description,
            submissionDate: new Date(createTaskDto.submissionDate),
            user: {id: createTaskDto.userId},
            comments: createTaskDto.comments?.map(this.toCreateComment),
            tagIds: createTaskDto.tagIds
        };
    }

    private toCreateComment(createCommentDto: CreateCommentDto, userId: number): CreateComment {
        return {
            content: createCommentDto.content,
            user: {id: userId}
        };
    }

    public toUpdateTask(updateTaskDto: UpdateTaskDto): UpdateTask {
        return {
            title: updateTaskDto.title,
            description: updateTaskDto.description,
            isCompleted: updateTaskDto.completed,
            submissionDate: new Date(updateTaskDto.submissionDate)
        };
    }

    public toTaskSummaryDtoList(tasks: TaskSummary[]): TaskSummaryDto[] {
        if(tasks.length == 0) return [];
        return tasks.map((t) => new TaskSummaryDto(
                    t.id, 
                    t.title, 
                    t.isCompleted, 
                    t.submissionDate!.toString()
                )
            );
    }

    public toTaskDetailDto(task: TaskDetail): TaskDetailDto {
        return new TaskDetailDto(
            task.title,
            task.description,
            task.isCompleted,
            task.submissionDate.toString(),
            task.comments.map(this.toCommentDto),
            task.tags.map(this.toTagDto),
            this.toUserSummaryDto(task.user)
        );
    }

    private toUserSummaryDto(user: UserEntity): UserSummaryDto {
        return {
            id: user.id!,
            firstName: user.firstName!,
            lastName: user.lastName!
        };
    }

    private toCommentDto(comment: CommentEntity): CommentDto {
        return new CommentDto(
            comment.id,
            comment.content,
            comment.publishDate.toString()
        );
    }

    private toTagDto(tag: TagEntity): TagDto {
        return new TagDto(
            tag.id,
            tag.title!
        )
    }
}