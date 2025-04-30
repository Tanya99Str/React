import {useEffect, useState} from "react";
import {getAllCars} from "../../services/car.service.ts";
import {ICar} from "../../models/ICar.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars().then(value => setCars(value));
    }, []);

    return (
        <>
            {
                cars.map(car => <CarComponent car={car} key={car.id} />)
            }
        </>
    );
};