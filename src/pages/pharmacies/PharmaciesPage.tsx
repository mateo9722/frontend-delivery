import { PharmacyCard } from "@/components/pharmacy/PharmacyCard"

const pharmacies = [
    {
        id: "1",
        name: "Farmacia SanaSana",
        address: "Av. Principal y Calle 10",
        eta: "25–30 min",
        isOpen: true,
        categories: ["Analgésicos", "Antibióticos"],
    },
    {
        id: "2",
        name: "Farmacia Cruz Azul",
        address: "Centro Comercial Plaza Norte",
        eta: "15–20 min",
        isOpen: true,
        categories: ["Alérgicos", "Vitaminas"],
    },
    {
        id: "3",
        name: "Farmacia 24/7",
        address: "Calle 8 y Av. Siempre Viva",
        eta: "40–50 min",
        isOpen: false,
        categories: ["Primeros auxilios", "Dermatológicos"],
    },
    {
        id: "4",
        name: "Farmacia SaludVida",
        address: "Av. Libertad 123",
        eta: "20–25 min",
        isOpen: true,
        categories: ["Alérgicos", "Vitaminas"],
    },
    {
        id: "5",
        name: "Farmacia Buen Precio",
        address: "Calle Falsa 456",
        eta: "30–35 min",
        isOpen: false,
        // esta farmacia no define categorías (válido)
    },
    {
        id: "6",
        name: "Farmacia Mata Sanos",
        address: "Centro Comercial La Estrella",
        eta: "10–15 min",
        isOpen: true,
        categories: ["Higiene personal", "Cuidado infantil"],
    },
]

export const PharmaciesPage = () => {
    return (
        <div className="mx-auto max-w-6xl rounded-2xl bg-background p-8 shadow-sm">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Farmacias disponibles
                </h1>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                    Encuentra farmacias cercanas y recibe tus medicamentos en minutos.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {pharmacies.map((pharmacy) => (
                    <PharmacyCard
                        key={pharmacy.id}
                        pharmacy={pharmacy}
                    />
                ))}
            </div>
        </div>
    )
}