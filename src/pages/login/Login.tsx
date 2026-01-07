import {AuthLayout} from "@/components/auth/AuthLayout";
import {LoginHeader} from "@/components/auth/LoginHeader";
import {LoginForm} from "@/components/auth/LoginForm";


export const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginHeader />
            <LoginForm />
        </AuthLayout>
    )
}