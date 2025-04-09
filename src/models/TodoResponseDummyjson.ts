import {TodoModel} from "./TodoModel.ts";

export interface TodoResponseDummyjson {
    todos: TodoModel[];
    skip: number;
    total: number;
    limit: number;
}