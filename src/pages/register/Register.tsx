import {RegisterLayout} from "../../components/auth/RegisterLayout";
import {RegisterHeader} from "../../components/auth/RegisterHeader";
import {RegisterForm} from "../../components/auth/RegisterForm";


export const RegisterPage = () => {
    return (
        <RegisterLayout>
            <RegisterHeader />
            <RegisterForm />
        </RegisterLayout>
    )
}