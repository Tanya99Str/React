import {FC} from "react";
import {QuoteModel} from "../../models/QuoteModel.ts";
import './QuoteComponent.css';

type PropType = {
    quote: QuoteModel;
}

export const QuoteComponent: FC<PropType> = ({quote}) => {
    return (
        <div>
            <h2>{quote.quote}</h2>
            <p><b>Author: </b>{quote.author}</p>
        </div>
    );
};
