import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom"

import "./index.css"
import App from "./App"
import { LoginPage } from "./pages/login/Login"
import { RegisterPage } from "./pages/register/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // 👉 redirección inicial
            {
                index: true,
                element: <Navigate to="/login" replace />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
            {
                path: "shop",
                element: <h1>Shop Page</h1>,
            },
        ],
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)