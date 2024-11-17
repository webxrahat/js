import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import { Root } from "./layout/Root.jsx";
import { About } from "./components/pages/About.jsx";
import { Users } from "./components/pages/Users.jsx";
import { SingleUser } from "./components/pages/SingleUser.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/users",
                loader: () =>
                    fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users />,
            },
            {
                path: "users/:id",
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/users/${params.id}`
                    ),
                element: <SingleUser />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
