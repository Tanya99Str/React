import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartModel} from "../../models/CartModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {CartResponseDummyjson} from "../../models/CartResponseDummyjson.ts";

export const CartsComponent = () => {

    const {id} = useParams();
    console.log(id);
    const [carts, setCarts] = useState<CartModel[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/' + id)
            .then(res => res.json())
            .then(({carts}: CartResponseDummyjson) => setCarts(carts));
    }, [id]);

    return (
        <>
            {
                carts.map(cart => <CartComponent key={id} cart={cart} />)
            }
        </>
    );
};