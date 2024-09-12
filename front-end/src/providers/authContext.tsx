import { createContext, useContext, useState } from "react";
import { ProviderProps, AuthContextData } from '../../interfaces/authContext.interface'
import { tLogin } from "../../types/signin";
import { tUserRegistration } from '../../types/signup'
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate()

  const [userId, setUserId] = useState(() => {
    const userIdSession = sessionStorage.getItem('@ergoframe:userId')
    if (userIdSession) return userIdSession
    return
  })

  const [token, setToken] = useState(() => {
    const tokenSession = sessionStorage.getItem('@ergoframe:token')
    if (tokenSession) return tokenSession
    return
  })

  const signIn = async (login: tLogin) => {

    await api.post('/user/login', login).then(res => {

      const decoded = jwtDecode(res.data.token) as { id: string }

      sessionStorage.setItem('@ergoframe:token', JSON.stringify(res.data.token))
      sessionStorage.setItem('@ergoframe:userId', JSON.stringify(decoded.id))

      setToken(res.data.token)
      setUserId(decoded.id)

      api.defaults.headers.common['authorization'] = `Bearer ${res.data.token}`

      toast.success('Seja bem vindo ao ErgoFrame')
      navigate('/dashboard')
    }).catch((res) => {
      console.log(res)
      toast.error('Algo não deu certo.\nVerifique se o e-mail e senha fornecidos estão corretos e tente novamente!')
    })

  }

  const signUp = async (user: tUserRegistration) => {

    await api.post('/user', user).then(async () => {
      toast.success('Cadastro realizado com sucesso!')
      const login: tLogin = { email: user.email, password: user.password }
      await signIn(login)
    }).catch(() => {
      toast.error('Algo não deu certo.\nTente novamente!')
    })

  }

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, userId, token }
      }
    >
      {children}
    </AuthContext.Provider>
  );

}

export { AuthProvider, useAuth }