import {Link} from "react-router-dom";
import "./NavMain.css";

export const NavMain = () => {
    return (
        <div className={'container'}>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/comments">Comments</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </div>
    );
};