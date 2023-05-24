import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layouts";
import { About, Blog, Contact, Home, NotFound, Post } from "../pages";

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
            }
        ]
    }
]);
