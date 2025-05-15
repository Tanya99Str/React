import {useForm} from "react-hook-form";
import {login} from "../../../services/auth.service.ts";
import {IUserLoginInfo} from "../../../models/IUserLoginInfo.ts";

export const SignInComponent = () => {

    const {register, handleSubmit} = useForm<IUserLoginInfo>();



    const authSignIn = (user: IUserLoginInfo) => {

        login(user);
    }

    return (
        <>
            <form onSubmit={handleSubmit(authSignIn)}>
                <input type="text" {...register("username")} /> {/*emilys*/}
                <input type="text" {...register("password")} /> {/*emilyspass*/}
                <button>Sign in</button>
            </form>
        </>
    );
};