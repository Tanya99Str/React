import './UsersDummyjsonComponent.css';
import {useEffect, useState} from "react";
import {UserDummyjsonModel} from "../../models/UserDummyjsonModel.ts";
import {loadUserDummyjson} from "../../services/api.service.ts";
import {UserDummyjsonComponent} from "../user-dummyjson-component/UserDummyjsonComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersDummyjsonComponent = () => {

    const [users, setUsers] = useState<UserDummyjsonModel[]>([]);
    useEffect(() => {
        loadUserDummyjson().then(val => setUsers(val));
    }, []);

    return (
        <>
            <Outlet/>
            <div className={'users-list'}>
                {
                    users.map(user =>
                        <div className="one-elem">
                            <UserDummyjsonComponent user={user} key={user.id}/>
                        </div>
                    )
                }
            </div>
        </>
    );
};