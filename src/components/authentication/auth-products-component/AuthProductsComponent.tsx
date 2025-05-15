import {useEffect, useState} from "react";
import {ProductDummyjsonModel} from "../../../models/ProductDummyjsonModel.ts";
import {loadAuthProducts, refreshToken} from "../../../services/auth.service.ts";

export const AuthProductsComponent = () => {

    const [products, setProducts] = useState<ProductDummyjsonModel[]>([]);

    useEffect(() => {
        loadAuthProducts().then(products => setProducts(products))
            .catch(error => {
                console.log(error);
                refreshToken().then(() => loadAuthProducts());
            })
    }, []);

    return (
        <>
            {
                products.map((product) => console.log(product))
            }
        </>
    );
};