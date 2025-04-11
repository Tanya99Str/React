import {Link, Outlet} from "react-router-dom";

export const CommentsComponentLesson3 = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="jsonplaceholder">jsonplaceholder</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
};