import {useEffect, useState} from "react";
import {loadQuotes} from "../../services/api.service.ts";
import {QuoteComponent} from "../quote-component/QuoteComponent.tsx";
import './QuotesComponent.css';
import {QuoteModel} from "../../models/QuoteModel.ts";

export const QuotesComponent = () => {
    const [quotes, setQuotes] = useState<QuoteModel[]>([]);
    useEffect(() => {
        loadQuotes().then(value => setQuotes(value));
    }, []);
    return (
        <>
            {
                quotes.map(quote => <QuoteComponent quote={quote} key={quote.id}/>)
            }
        </>
    );
};
