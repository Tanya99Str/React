import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

export const RightBranchA = () => {

    const {theme, changeTheme} = useContext(MyContext);

    const handle = () => {
        theme === "dark" ? changeTheme('light') : changeTheme('dark');
    }

    return (
        <div>
            <button onClick={handle}>
                Chance theme to
                {
                    (theme === 'dark') ? <span> light</span> : <span> dark</span>
                }
            </button>
        </div>
    );
};