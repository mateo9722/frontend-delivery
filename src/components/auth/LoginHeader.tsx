import { Bike } from "lucide-react"

export const LoginHeader = () => {
    return (
        <div className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Bike size={22} />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
                Inicia sesión
            </h1>

            <p className="text-sm text-muted-foreground">
                Ingresa para pedir tu comida favorita
            </p>
        </div>
    )
}