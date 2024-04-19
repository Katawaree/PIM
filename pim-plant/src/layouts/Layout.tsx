import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
   return (
    <div className="container">
        <div className="main">
            <Outlet/>
        </div>
        <NavBar/>
    </div>
   ) 
}