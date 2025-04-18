import {FC} from "react";
import {CartModel} from "../../models/CartModel.ts";

type PropType = {
    cart: CartModel;
}

export const CartComponent: FC<PropType> = ({cart}) => {
    return (
        <>
            {
               <div style={{borderBottom: '1px solid gray'}}>
                   <h2>Cart ID - {cart.id}</h2>
                   <p>Total - {cart.total}</p>
               </div>
            }
        </>
    );
};