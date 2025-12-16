import { useState } from "react"
import { useNavigate } from "react-router"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export const LoginForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
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

        const savedUser = localStorage.getItem("register-user")

        if (!savedUser) {
            alert("No existe un usuario registrado")
            return
        }

        const user = JSON.parse(savedUser)

        if (
            user.email === formData.email &&
            user.password === formData.password
        ) {
            console.log("Login exitoso")
            navigate("/") // luego será home
        } else {
            alert("Credenciales incorrectas")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" variant="outline" className="w-full">
                Iniciar sesión
            </Button>
            <div className="text-center text-sm">
  <span className="text-muted-foreground">
    ¿No tienes cuenta?{" "}
  </span>
                <Link
                    to="/register"
                    className="font-medium text-primary hover:underline"
                >
                    Regístrate
                </Link>
            </div>
        </form>
    )
}