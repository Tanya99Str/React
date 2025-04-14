import {Link, Outlet} from "react-router-dom";

export const PostsComponentLesson3 = () => {
    return (
        <>
            <ul style={{ padding: "10px 0" }}>
                <li>
                    <Link to="jsonplaceholder">jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">dummyjson</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
};