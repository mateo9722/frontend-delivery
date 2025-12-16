import { useState } from "react"
import { useNavigate } from "react-router"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {Link} from "react-router-dom";

export const RegisterForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { name, email, password } = formData

        // 👉 validación mínima
        if (!name || !email || !password) {
            alert("Por favor completa todos los campos")
            return
        }

        localStorage.setItem("register-user", JSON.stringify(formData))
        console.log("Registro enviado:", formData)

        navigate("/login")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                    id="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" variant="outline" className="w-full">
                Crea tu cuenta
            </Button>
            <div className="text-center text-sm">
  <span className="text-muted-foreground">
    ¿Ya tienes cuenta?{" "}
  </span>
                <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                >
                    Inicia sesión
                </Link>
            </div>
        </form>
    )
}