import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute({ redirectPath }) {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet />;
}

export default AuthRoute;