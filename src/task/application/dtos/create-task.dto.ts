export interface CreateTaskDto {
    title: string;
    description: string;
    comments: {content: string}[];
    tagIds: number[];
}