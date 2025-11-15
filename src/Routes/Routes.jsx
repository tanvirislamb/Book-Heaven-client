import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import Details from "../Pages/Details";
import Register from "../Pages/Register";
import Private from "../Provider/PrivateRoute";
import Login from "../Pages/Login";
import AddBook from "../Pages/AddBooks";
import MyBooks from "../Pages/MyBooks";
import ErrorPage from "../Component/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/allbooks',
                Component: AllBooks
            },
            {
                path: '/addbooks',
                element: <Private><AddBook></AddBook></Private>
            },
            {
                path: '/mybooks',
                element: <Private><MyBooks></MyBooks></Private>
            },
            {
                path: '/details/:id',
                element: <Private><Details></Details></Private>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])