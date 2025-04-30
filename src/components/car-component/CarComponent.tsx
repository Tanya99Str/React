import {FC} from "react";
import {ICar} from "../../models/ICar.ts";
import './CarComponent.css';

type PropType = {
    car: ICar;
}

export const CarComponent: FC<PropType> = ({car}) => {
    return (
        <div className={"one-car-block"}>
            <p><b>ID - </b>{car?.id}</p>
            <p><b>Brand - </b>{car.brand}</p>
            <p><b>Price - </b>{car.price}</p>
            <p><b>Year - </b>{car.year}</p>
        </div>
    );
};