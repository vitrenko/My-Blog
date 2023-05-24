import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
    

function PublicLayout() {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>)
}

export default PublicLayout;