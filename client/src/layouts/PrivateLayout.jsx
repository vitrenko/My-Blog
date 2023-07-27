import AppHeaderBar from "../components/AppHeaderBar/AppHeaderBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import UnderBarSpace from "../components/UnderBarSpace/UnderBarSpace";
    

function PrivateLayout() {
    return (
    <>
        <AppHeaderBar />
        <UnderBarSpace />
        <main>
            <h1 style={{display: "block"}}>Private layout</h1>
            <Box sx={{display: "flex"}}>
                <Sidebar />
                <Outlet />
            </Box>
        </main>       
        <Footer />
    </>)
}

export default PrivateLayout;