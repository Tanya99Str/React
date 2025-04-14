import {useEffect, useState} from "react";
import {UserModel} from "../../models/UserModel.ts";
import {loadUsers} from "../../services/api.service.ts";
import {UserJsonplaceholderComponent} from "../user-jsonplaceholder-component/UserJsonplaceholderComponent.tsx";
import './UsersJsonplaceholderComponent.css';

export const UsersJsonplaceholderComponent = () => {

    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
        loadUsers().then(val => setUsers(val));
    }, []);

    return (
        <div className={'users-list'}>
            {
                users.map(user =>
                    <div className={'one-elem'}>
                        <UserJsonplaceholderComponent user={user} key={user.id}/>
                    </div>
                )
            }
        </div>
    );
};