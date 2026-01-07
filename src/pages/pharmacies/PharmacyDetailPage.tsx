import { useParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockPharmacy = {
    id: "1",
    name: "Farmacia SanaSana",
    address: "Av. Principal y Calle 10",
    categories: ["Analgésicos", "Antibióticos"],
    products: [
        {
            id: "p1",
            name: "Paracetamol 500mg",
            description: "Caja de 10 tabletas",
            price: 3.5,
        },
    ],
}

export const PharmacyDetailPage = () => {
    const { id } = useParams()

    return (
        <div className="mx-auto max-w-6xl space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    {mockPharmacy.name}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                    {mockPharmacy.address}
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
                {mockPharmacy.categories.map((category) => (
                    <span
                        key={category}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                        {category}
                    </span>
                ))}
            </div>

            {/* Products */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">
                    Productos disponibles
                </h2>

                <Card className="max-w-sm">
                    <CardContent className="space-y-2 p-4">
                        <div>
                            <h3 className="font-medium">
                                {mockPharmacy.products[0].name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {mockPharmacy.products[0].description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="font-semibold">
                                ${mockPharmacy.products[0].price}
                            </span>
                            <Button size="sm">
                                Agregar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}