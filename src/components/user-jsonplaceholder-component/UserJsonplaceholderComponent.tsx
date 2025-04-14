import {FC} from "react";
import {UserModel} from "../../models/UserModel.ts";
import './UserJsonplaceholderComponent.css';

type PropType = {
    user: UserModel
}

export const UserJsonplaceholderComponent: FC<PropType> = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Address:</b> {user.address.suite} {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <p><b>Company:</b> {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
        </div>
    );
};