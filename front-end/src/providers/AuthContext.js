import { useContext, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

const AuthContext = createContext()

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(() => {
        const tokenLocal = localStorage.getItem('@ergoframe:token')
        if (tokenLocal) return tokenLocal
        return ''
    })

    const signUp = ({ fullname, email, password }) => {

        api.post('/user', { fullname, email, password })
            .then(res => {
                toast.success('Cadastro realizado com sucesso')

                const data = {}
                data.email = email
                data.password = password

                signIn(data)
            }).catch(err => {
                toast.error('Algo deu errado.\nTente novamente!')
            })
    }

    const signIn = ({ email, password }) => {

        api.post('/user/login', { email, password })
            .then(res => {
                setToken(res.data.token)
                localStorage.setItem('@ergoframe:token', res.data.token)
                toast.success('Seja bem vindo ao ErgoFrame')
            }).catch(err => {
                toast.error('Algo não deu certo.\nVerifique se o e-mail e senha estão corretos')
            })
    }

    const signOut = () => {
        localStorage.clear()
        setToken('')
    }

    return (
        <AuthContext.Provider value={{ signIn, token, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }