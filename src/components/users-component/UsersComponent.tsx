import {Link, Outlet} from "react-router-dom";

export const UsersComponent = () => {
    return (
        // <>
        //     Users Component
        // </>

        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">dummyjson</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};