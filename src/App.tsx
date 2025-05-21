import './App.css';
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

const App = () => {

    //   const posts = useFetch<PostModel[]>('https://jsonplaceholder.typicode.com/posts', [])
    //
    //   return (
    //     <>
    //        <ul>
    //            {
    //                posts.map((post) =>
    //                    <li>{post.title}</li>
    //                )
    //            }
    //        </ul>
    //     </>
    // )

    const [color, setColor] = useState<string>('light');

    return (
        <div className={color}>

            <MyContext.Provider value={{
                theme: color,
                changeTheme: (theme: string) => {
                    setColor(theme);
                }
            }}>
                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>
        </div>
    )


}

export default App;
