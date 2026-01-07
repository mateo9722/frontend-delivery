import {AuthLayout} from "../../components/auth/AuthLayout";
import {RegisterHeader} from "../../components/auth/RegisterHeader";
import {RegisterForm} from "../../components/auth/RegisterForm";


export const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegisterHeader />
            <RegisterForm />
        </AuthLayout>
    )
}