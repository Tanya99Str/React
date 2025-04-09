import {QuoteModel} from "./QuoteModel.ts";

export interface QuoteResponseDummyjsonModel {
    quotes: QuoteModel[];
    skip: number;
    total: number;
    limit: number;
}
