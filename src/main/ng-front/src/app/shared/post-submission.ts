import { UserPost } from "./user-post";

export class PostSubmission {
    postTitle: string;
    postContent: string;
    entityId: string;
    accessorId: string;
  
    constructor(postTitle: string, postContent: string) {
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.accessorId = localStorage.getItem("accessorId") ?? "";
        this.entityId = localStorage.getItem("entityId") ?? "";
    }
}
