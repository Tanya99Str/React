import {CartModel} from "./CartModel.ts";

export interface CartResponseDummyjson {
    carts: CartModel[];
    limit: number;
    skip: number;
    total: number;
}