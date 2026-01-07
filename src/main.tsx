import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom"

import "./index.css"

import { LoginPage } from "./pages/login/Login"
import { RegisterPage } from "./pages/register/Register"
import { PharmaciesPage } from "./pages/pharmacies/PharmaciesPage"
import {AppLayout} from "@/components/layout/AppLayout";
import {PharmacyDetailPage} from "@/pages/pharmacies/PharmacyDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            // 👉 redirección inicial
            {
                index: true,
                element: <Navigate to="/login" replace />,
            },

            // 👉 Auth (SIN sidebar)
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },

            // 👉 App (CON sidebar)
            {
                element: <AppLayout />,
                children: [
                    {
                        path: "pharmacies",
                        element: <PharmaciesPage />,
                    },
                    {
                        path:"pharmacies/:id",
                        element: <PharmacyDetailPage/>
                    }
                ],
            },
        ],
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)