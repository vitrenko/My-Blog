import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
    

function PrivateLayout() {
    return (
    <>
        <Header />
        <main>
            <h1>Private layout</h1>
            <Sidebar />
            <Outlet />
        </main>       
        <Footer />
    </>)
}

export default PrivateLayout;