import { createBrowserRouter } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "../layouts";

import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

import { 
    About, 
    Blog, 
    Contact, 
    Home, 
    NotFound, 
    Post, 
    Profile,
    Login, 
    Registration, 
    Dashboard,
    DashboardPost,
    DashboardPosts,
} from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/posts/:id",
                element: <Post />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    },
    {
        element: <AuthRoute redirectPath={"/"} />,
        children: [
            {
                element: <PublicLayout />,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
                    },
        
                    {
                        path: "/registration",
                        element: <Registration />,
                    },
        
                ]
            },
        ],
    },
    {
        element: <PrivateRoute redirectPath={"/login"} />,
        children: [
            {
                element: <PrivateLayout />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "/dashboard/post",
                        element: <DashboardPost />,
                    },
                    {
                        path: "/dashboard/posts",
                        element: <DashboardPosts />,
                    },
                    {
                        path: "/myprofile",
                        element: <Profile />,
                    },
                ]
            }
        ],
    },
]);
