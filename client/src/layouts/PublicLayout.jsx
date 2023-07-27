import AppHeaderBar from "../components/AppHeaderBar/AppHeaderBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import UnderBarSpace from "../components/UnderBarSpace/UnderBarSpace";
    

function PublicLayout() {
    return (
    <>
        <AppHeaderBar />
        <UnderBarSpace />
        <Outlet />
        <Footer />
    </>)
}

export default PublicLayout;