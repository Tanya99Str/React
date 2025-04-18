import './UserDummyjsonComponent.css';
import {UserDummyjsonModel} from "../../models/UserDummyjsonModel.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type PropType = {
    user: UserDummyjsonModel
}

export const UserDummyjsonComponent: FC<PropType> = ({user}) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return (
        <>
            <div className={"photo"} style={{backgroundImage: `url(${user.image})`}}></div>
            <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
            <p><b>Username: </b>{user.username}</p>
            <p><b>Age: </b>{user.age}</p>
            <p><b>Gender: </b>{user.gender}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Phone: </b>{user.phone}</p>
            <p><b>Birth date: </b>{user.birthDate}</p>
            <p><b>Blood group: </b>{user.bloodGroup}</p>
            <p><b>Height: </b>{user.height}</p>
            <p><b>Weight: </b>{user.weight}</p>
            <p><b>Eye color: </b>{user.eyeColor}</p>
            <p><b>Hair: </b>{user.hair.color}, {user.hair.type}</p>
            <p><b>IP: </b>{user.ip}</p>
            <p>
                <b>Address: </b>{user.address.address}, {user.address.city},{user.address.postalCode}, {user.address.state}, {user.address.stateCode}, {user.address.country}, {user.address.coordinates.lat}, {user.address.coordinates.lng}
            </p>
            <p><b>Mac address: </b>{user.macAddress}</p>
            <p><b>University: </b>{user.university}</p>
            <p><b>Bank: </b>{user.bank.currency} {user.bank.cardNumber}, {user.bank.cardType}, {user.bank.cardExpire}
            </p>
            <p><b>Role: </b>{user.role}</p>
            <p>
                <b>Company: </b>{user.company.title}, {user.company.name}, {user.company.department}, {user.company.title},
                {user.company.address.address}, {user.company.address.city},{user.company.address.postalCode}, {user.company.address.state}, {user.company.address.stateCode}, {user.company.address.country}, {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}
            </p>
            <p><b>Crypto: </b>{user.crypto.wallet}, {user.crypto.network}, {user.crypto.coin}</p>
            <button onClick={onButtonClickNavigate}>Show carts</button>
        </>
    );
};