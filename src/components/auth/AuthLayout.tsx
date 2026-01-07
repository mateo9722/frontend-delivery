import { ReactNode } from "react"
import {Card, CardContent} from "../ui/card";

interface RegisterLayoutProps {
    children: ReactNode
}

export const AuthLayout = ({ children }: RegisterLayoutProps) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md shadow-md">
                <CardContent className="p-6 space-y-6">
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}