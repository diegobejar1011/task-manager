import { TaskEntity as Task, CommentEntity as Comment, TagEntity as Tag } from "src/task/domain/entities";
import { TaskEntity } from "../entities/task.entity";
import { Injectable } from "@nestjs/common";
import { CommentEntity } from "../entities/comment.entity";
import { TagEntity } from "../entities/tag.entity";


@Injectable()
export class TaskEntityMapper {

    public toDomain(taskEntity: TaskEntity): Task {
        return new Task(
            taskEntity.title,
            taskEntity.description,
            taskEntity.isCompleted,
            taskEntity.submissionDate,
            taskEntity.comments ? taskEntity.comments.map(c => this.toCommentDomain(c)) : [],
            taskEntity.tags ? taskEntity.tags.map(t => this.toTagDomain(t)) : [],
            taskEntity.user,
            taskEntity.id
        );
    }

    private toCommentDomain(commentEntity: CommentEntity): Comment {
        return new Comment(
            commentEntity.content,
            commentEntity.publishDate,
            commentEntity.user
        );
    }

    private toTagDomain(tagEntity: TagEntity): Tag {
        return new Tag(
            tagEntity.id,
            tagEntity.title
        );
    }

    public toDomainList(tasks: TaskEntity[]): Task[] {
        return tasks.map(t => this.toDomain(t));
    }
}