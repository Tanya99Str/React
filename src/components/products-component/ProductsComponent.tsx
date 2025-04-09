import {useEffect, useState} from "react";
import {ProductDummyjsonModel} from "../../models/ProductDummyjsonModel.ts";
import {LoadProducts} from "../../services/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import './ProductsComponent.css';

export const ProductsComponent = () => {

    const [products, setProducts] = useState<ProductDummyjsonModel[]>([]);
    useEffect(() => {
        LoadProducts().then(values => setProducts(values));
    }, []);

    return (
        <div className="container">
            {
                products.map((product: ProductDummyjsonModel) =>
                    <div className={"one-elem"}>
                        <ProductComponent product={product} key={product.id} />
                    </div>)
            }
        </div>
    );
};