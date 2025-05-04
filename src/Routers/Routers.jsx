import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: "/Home",
        element: <div>Home</div>,
    },
    {
        path: "/*",
        element: <div>Error 404</div>,
    },
]);

export default router;