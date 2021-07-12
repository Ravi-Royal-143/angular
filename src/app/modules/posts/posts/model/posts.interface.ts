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

export interface PaginationReq {
    pageSize: number;
    page: number;
}

export interface Pagination {
    page: number;
    totalRec: number;
    rowsPerPage: number;
}