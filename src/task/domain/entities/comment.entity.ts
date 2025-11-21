export class CommentEntity {
    id?: number;
    content: string;
    publishDate: Date;

    constructor(
        content: string,
        publishDate: Date,
        id?: number
    ) {
        this.content = content;
        this.publishDate = publishDate;
        this.id = id;
    }
}