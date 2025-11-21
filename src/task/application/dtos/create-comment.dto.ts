export interface CreateCommentDto {
    content: string;
    user: {id:number};
}