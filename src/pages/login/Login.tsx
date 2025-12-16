import {RegisterLayout} from "../../components/auth/RegisterLayout";
import {LoginHeader} from "../../components/auth/LoginHeader";
import {LoginForm} from "../../components/auth/LoginForm";


export const LoginPage = () => {
    return (
        <RegisterLayout>
            <LoginHeader />
            <LoginForm />
        </RegisterLayout>
    )
}