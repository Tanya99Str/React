import './UsersDummyjsonComponent.css';
import {useEffect, useState} from "react";
import {UserDummyjsonModel} from "../../models/UserDummyjsonModel.ts";
import {loadUsersWithPagination} from "../../services/api.service.ts";
import {UserDummyjsonComponent} from "../user-dummyjson-component/UserDummyjsonComponent.tsx";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {useSearchParams} from "react-router-dom";
// import {Outlet} from "react-router-dom";

export const UsersDummyjsonComponent = () => {

    const [users, setUsers] = useState<UserDummyjsonModel[]>([]);
    const [searchParams] = useSearchParams({page: '1'});
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        loadUsersWithPagination(currentPage).then(val => setUsers(val));
    }, [searchParams]);

    return (
        <div style={{padding: '20px'}}>
            {/*<Outlet/>*/}
            <div className={'users-list'}>
                {
                    users.map(user =>
                        <div className="one-elem" key={user.id}>
                            <UserDummyjsonComponent user={user}/>
                        </div>
                    )
                }
            </div>
            <PaginationComponent/>
        </div>
    );
};