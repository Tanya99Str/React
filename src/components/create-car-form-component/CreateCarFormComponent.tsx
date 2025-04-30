import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {createCar} from "../../services/car.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import './CreateCarFormComponent.css';

export const CreateCarFormComponent = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({mode: "all", resolver: joiResolver(carValidator)});

    const createNewCar = (car: ICar) => {
        createCar(car);
    }

    return (
        <div className={'form-container'}>
            <form onSubmit={handleSubmit(createNewCar)}>
                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>Save car</button>
            </form>
        </div>
    );
};
