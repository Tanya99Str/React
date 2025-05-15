import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IUserLoginInfo} from "../models/IUserLoginInfo.ts";
import {data} from "react-router-dom";
import {ProductDummyjsonModel} from "../models/ProductDummyjsonModel.ts";
import {ProductResponseDummyjson} from "../models/ProductResponseDummyjson.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
const retriveLocalStorage = <T>(key: string) => {
    const value = localStorage.getItem(key) || '';
    if (!value) {
        return {} as T;
    }
    const parse = JSON.parse(value);
    return parse as T;
}

axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase() === "GET") {
        requestObj.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObj;
})

export const login =  async ({username, password, expiresInMins}: IUserLoginInfo) => {

    expiresInMins = 1;
    console.log(data);
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}

export const loadAuthProducts = async (): Promise<ProductDummyjsonModel[]> => {
    const {data} = await axiosInstance.get<ProductResponseDummyjson>('/products');
    return data.products;
}

export const refreshToken = async () => {
    const iUserWithToken : IUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithToken.refreshToken,
        expiresInMins: 1
    });
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken));
}

