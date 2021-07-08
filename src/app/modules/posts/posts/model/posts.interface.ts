export class PostsModel {
    openDialog: boolean;
}

export interface PostsRes {
    message: string;
    posts: fetchedPosts[],
    maxPosts: number;
}

export interface fetchedPosts {
    imagePath: string;
    title: string;
    content: string;
    imgTitle: string;
}