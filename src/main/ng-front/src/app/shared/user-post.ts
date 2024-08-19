export class UserPost {
    title: string;
    content: string;
    author: string;
    entityId: string;
    postId : Number;
    userId: Number;

    constructor(title: string, content: string, author: string, entityId: string, postId: Number, userId: Number) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.entityId = entityId;
        this.postId = postId;
        this.userId = userId;
    }
}
