import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../components/NewsDetails";
import PrevideRoute from "../Provider/PrevideRoute";
import Loading from "../components/Loading";

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
                element: <CategoryNews> </CategoryNews>,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/Login",
                element: <Login></Login>,
            },
            {
                path: "/auth/Register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "/news-Details/:id",
        element:
            <PrevideRoute>
                <NewsDetails></NewsDetails>
            </PrevideRoute>
        ,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/*",
        element: <div>Error 404</div>,
    },
]);

export default router;