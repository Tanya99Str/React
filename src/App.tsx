import './App.css';
import {NavMain} from "./components/nav-main/NavMain.tsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
      <>
          <NavMain/>
          <Outlet/>



        </>
  )
}


export default App;
