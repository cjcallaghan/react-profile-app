import { createContext } from "react";
import { useState, useLayoutEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    useLayoutEffect(() => {
        const isLogin = localStorage.getItem("isLogin") === "true";
        setIsLogin(isLogin)
    }, [])

    const login = () => {
        setIsLogin(true);
        localStorage.setItem("isLogin", true)
    }

    const logout = () => {
        fetch("https://web.ics.purdue.edu/~ccallag/profile-app/logout.php")
            .then((res) => res.json())
            .then(data =>{
                if(data.message){
                    setIsLogin(false);
                    localStorage.setItem("isLogin", false)
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;