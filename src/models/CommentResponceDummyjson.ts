import {CommentDummyjsonModel} from "./CommentDummyjsonModel.ts";

export interface CommentResponseDummyjson {
    comments: CommentDummyjsonModel[];
    skip: number;
    total: number;
    limit: number;
}