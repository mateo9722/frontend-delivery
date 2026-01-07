import { Outlet, NavLink } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div className="flex min-h-screen bg-muted/40">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col border-r bg-muted/30 px-4 py-6">
                {/* Logo */}
                <div className="mb-8 flex items-center gap-2 px-2">
                    <span className="text-xl">💊</span>
                    <span className="text-lg font-semibold">
                        MedDelivery
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 text-sm">
                    <NavLink
                        to="/pharmacies"
                        className={({ isActive }) =>
                            `rounded-md px-3 py-2 transition ${
                                isActive
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-muted-foreground hover:bg-muted"
                            }`
                        }
                    >
                        Farmacias
                    </NavLink>

                    <NavLink
                        to="/orders"
                        className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted transition"
                    >
                        Pedidos
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted transition"
                    >
                        Perfil
                    </NavLink>
                </nav>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Footer / Logout (visual por ahora) */}
                <div className="border-t pt-4">
                    <button className="w-full rounded-md px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted transition">
                        Cerrar sesión
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-muted/30 p-8">
                <Outlet />
            </main>
        </div>
    )
}