import {ProductDummyjsonModel} from "./ProductDummyjsonModel.ts";

export interface ProductResponseDummyjson {
    products: ProductDummyjsonModel[];
    skip: number;
    total: number;
    limit: number;
}
