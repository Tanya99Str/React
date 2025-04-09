import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";
import {PostResponceDummyjson} from "../models/PostResponceDummyjson.ts";
import {TodoResponseDummyjson} from "../models/TodoResponseDummyjson.ts";
import {QuoteResponseDummyjsonModel} from "../models/QuoteResponseDummyjsonModel.ts";
import {QuoteModel} from "../models/QuoteModel.ts";
import {ProductDummyjsonModel} from "../models/ProductDummyjsonModel.ts";
import {ProductResponseDummyjson} from "../models/ProductResponseDummyjson.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';
const endpointQuotes = import.meta.env.VITE_API_BASE_URL + '/quotes';
const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

// export const loadTodos = async (): Promise<TodoModel[]> => {
//     return await fetch(endpointTodos).then(value => value.json());
// }

export const loadTodos = async (): Promise<TodoModel[]> => {
    const response: TodoResponseDummyjson =  await fetch(endpointTodos)
        .then(value => value.json());
    return response.todos;
}

// export const loadPosts = async (): Promise<PostModel[]> => {
//     return await fetch(endpointPosts).then(value => value.json());
// }

export const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostResponceDummyjson = await fetch(endpointPosts)
        .then(value => value.json());
    return response.posts;
}

export const loadComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointComments).then(value => value.json());
}

export const LoadQuotes = async (): Promise<QuoteModel[]> => {
    const response: QuoteResponseDummyjsonModel = await fetch(endpointQuotes)
        .then(value => value.json());
    return response.quotes;
}

export const LoadProducts = async (): Promise<ProductDummyjsonModel[]> => {
    const response: ProductResponseDummyjson = await fetch(endpointProducts)
        .then(value => value.json());
    return response.products;
}
