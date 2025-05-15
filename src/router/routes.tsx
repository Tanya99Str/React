import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {SignInComponent} from "../components/authentication/sign-in-component/SignInComponent.tsx";
import {AuthProductsComponent} from "../components/authentication/auth-products-component/AuthProductsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "login", element: <SignInComponent/>},
            {path: "auth/products", element: <AuthProductsComponent/>}
        ]
    }
]);

