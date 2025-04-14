import {UserDummyjsonModel} from "./UserDummyjsonModel.ts";

export  interface UserResponseDummyjson {
    users: UserDummyjsonModel[];
    total: number;
    limit: number;
    skip: number;
}