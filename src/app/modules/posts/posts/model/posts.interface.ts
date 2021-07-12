export class PostsModel {
    openDialog: boolean;
}

export interface PostsRes {
    message: string;
    posts: fetchedPosts[],
    maxPosts: number;
}

export interface fetchedPosts {
    title: string;
    content: string;
    imgTitle: string;
    creator: string;
    googleImgId: string;
    imageDownloadId: string;
    imageTitle: string;
    imageViewId: string;
    img: string;
}