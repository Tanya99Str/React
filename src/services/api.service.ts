import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";
import {PostResponceDummyjson} from "../models/PostResponceDummyjson.ts";
import {TodoResponseDummyjson} from "../models/TodoResponseDummyjson.ts";
import {QuoteResponseDummyjsonModel} from "../models/QuoteResponseDummyjsonModel.ts";
import {QuoteModel} from "../models/QuoteModel.ts";
import {ProductDummyjsonModel} from "../models/ProductDummyjsonModel.ts";
import {ProductResponseDummyjson} from "../models/ProductResponseDummyjson.ts";
import {UserModel} from "../models/UserModel.ts";
import {UserDummyjsonModel} from "../models/UserDummyjsonModel.ts";
import {UserResponseDummyjson} from "../models/UserResponseDummyjson.ts";
import {CommentDummyjsonModel} from "../models/CommentDummyjsonModel.ts";
import {CommentResponseDummyjson} from "../models/CommentResponceDummyjson.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';
const endpointQuotes = import.meta.env.VITE_API_BASE_URL + '/quotes';
const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';
const endpointUsers = import.meta.env.VITE_API_BASE_URL + '/users';

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

export const loadPostsJsonPlaceholder = async (): Promise<PostModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json());
}

export const loadCommentsJsonplaceholder = async (): Promise<CommentModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json());
}

export const loadComments = async (): Promise<CommentDummyjsonModel[]> => {
    const response: CommentResponseDummyjson = await fetch(endpointComments)
        .then(value => value.json());
    return response.comments;
}

export const loadQuotes = async (): Promise<QuoteModel[]> => {
    const response: QuoteResponseDummyjsonModel = await fetch(endpointQuotes)
        .then(value => value.json());
    return response.quotes;
}

export const loadProducts = async (): Promise<ProductDummyjsonModel[]> => {
    const response: ProductResponseDummyjson = await fetch(endpointProducts)
        .then(value => value.json());
    return response.products;
}

export const loadUsers = async (): Promise<UserModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
}

export const loadUserDummyjson = async (): Promise<UserDummyjsonModel[]> => {
    const response: UserResponseDummyjson = await fetch(endpointUsers)
        .then(value => value.json());
    return response.users;
}
