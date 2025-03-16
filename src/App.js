import ReactDOM from "react-dom/client"
import React from "react";
import Signup from "./components/Signup";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import Landing from "./components/Landing";


const Applayout = () => {

    return (

        <div>
            <Header />
            <Outlet />
        </div>

    );
};

//header is kept intact throughout the app
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    },

]

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);