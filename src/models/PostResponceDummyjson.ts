import {PostModel} from "./PostModel.ts";

export interface PostResponceDummyjson {
    posts: PostModel[];
    skip: number;
    total: number;
    limit: number;
}