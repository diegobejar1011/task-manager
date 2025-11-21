import { Injectable } from "@nestjs/common";
import { TaskEntity } from "src/task/domain/entities";
import { TaskDetailDto, TaskSummaryDto } from "../dtos";

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
            comments: task.comments,
            tags: task.tags
        }
    }
}