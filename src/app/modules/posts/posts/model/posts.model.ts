import { Pagination } from "./posts.interface";

export class PostsModel {
    openDialog: boolean;
    posts = [];
    editPostData;
    pagination: Pagination;

    constructor() {
        this.pagination = {
            page: 1,
            totalRec: 15,
            rowsPerPage: 5
        }
    }
}