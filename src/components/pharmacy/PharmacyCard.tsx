import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

type Pharmacy = {
    id: string
    name: string
    address: string
    eta: string
    isOpen: boolean
    categories?: string[]
}

type Props = {
    pharmacy: Pharmacy
}

export const PharmacyCard = ({ pharmacy }: Props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (!pharmacy.isOpen) return
        navigate(`/pharmacies/${pharmacy.id}`)
    }

    return (
        <Card
            onClick={handleClick}
            className={`group cursor-pointer transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-lg
            ${
                pharmacy.isOpen
                    ? "bg-background"
                    : "cursor-not-allowed opacity-60 grayscale"
            }`}
        >
            <CardContent className="space-y-4 p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold leading-tight">
                            {pharmacy.name}
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {pharmacy.address}
                        </p>
                    </div>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                            pharmacy.isOpen
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-600"
                        }`}
                    >
                        {pharmacy.isOpen ? "Abierta" : "Cerrada"}
                    </span>
                </div>

                {/* ETA */}
                <div className="text-sm font-medium">
                    ⏱ {pharmacy.eta}
                </div>

                {/* Categories */}
                {pharmacy.categories && (
                    <div className="flex flex-wrap gap-2">
                        {pharmacy.categories.map((category) => (
                            <span
                                key={category}
                                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                {pharmacy.isOpen && (
                    <div className="text-right text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                        Ver farmacia →
                    </div>
                )}
            </CardContent>
        </Card>
    )
}