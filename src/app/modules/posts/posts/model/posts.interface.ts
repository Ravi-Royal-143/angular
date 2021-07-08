export class PostsModel {
    openDialog: boolean;
}

export interface PostsRes {
    message: string;
    posts: fetchedPosts[],
    maxPosts: number;
}

export interface fetchedPosts {
    image: File;
    title: string;
    content: string;
}