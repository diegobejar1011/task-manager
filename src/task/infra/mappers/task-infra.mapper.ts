import { Injectable } from "@nestjs/common";
import { CreateTaskDto as CreateTask, TaskDetailDto as TaskDetail, TaskSummaryDto as TaskSummary, UpdateTaskDto as UpdateTask } from "src/task/application/dtos";
import { CommentDto, CreateTaskDto, TagDto, TaskDetailDto, TaskSummaryDto, UpdateTaskDto } from "../dtos";
import { CommentEntity } from "../entities/comment.entity";
import { TagEntity } from "src/task/domain/entities";

@Injectable()
export class TaskInfraMapper {

    public toCreateTask(createTaskDto: CreateTaskDto): CreateTask {
        return {
            title: createTaskDto.title,
            description: createTaskDto.description,
            comments: createTaskDto.comments,
            tagIds: createTaskDto.tagIds
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
                    t.submissionDate != null ? t.submissionDate.toString() : null
                )
            );
    }

    public toTaskDetailDto(task: TaskDetail): TaskDetailDto {
        return new TaskDetailDto(
            task.title,
            task.description,
            task.isCompleted,
            task.submissionDate != null ? task.submissionDate.toString() : null,
            task.comments.map(this.toCommentDto),
            task.tags.map(this.toTagDto)
        );
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