import {NavMain} from "../components/nav-main/NavMain.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <NavMain/>
            <Outlet/>
        </>
    );
};