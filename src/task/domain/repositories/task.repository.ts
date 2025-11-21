import { TaskEntity } from "../entities";

export interface TaskRepository {
    findAll(): Promise<TaskEntity[]>;
    findOne(id: number): Promise<TaskEntity>;
    create(task: TaskEntity): Promise<void>;
    update(task: TaskEntity): Promise<void>;
    delete(id: number): Promise<void>;
}