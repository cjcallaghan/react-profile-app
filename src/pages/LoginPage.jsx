import Wrapper from "../components/Wrapper"
import AuthForm from "../components/AuthForm"
import { Link } from "react-router-dom"

const LoginPage = () => {

    return(
        <Wrapper>
            <h1>Login</h1>
            <AuthForm isRegister={false}></AuthForm>
            <Link to="/Register">Register</Link>
        </Wrapper>
    )
}

export default LoginPage
