import Wrapper from "../components/Wrapper"
import AuthForm from "../components/AuthForm"

const RegisterPage = () => {

    return(
        <Wrapper>
            <h1>Register</h1>
            <AuthForm isRegister = "true"></AuthForm>
        </Wrapper>
    )
}

export default RegisterPage
