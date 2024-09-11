import { createContext, useContext, useEffect } from "react";
import { ProviderProps, AuthContextData } from '../../interfaces/authContext.interface'
import { tLogin } from "../../types/signin";
import { tUserRegistration } from '../../types/signup'
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem('@ergoframe:token')

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
    }

  }, [])

  const signIn = async (login: tLogin) => {

    await api.post('/user/login', login).then(res => {
      sessionStorage.setItem('@ergoframe:token', JSON.stringify(res.data.token))
      toast.success('Seja bem vindo ao ErgoFrame')
      navigate('/dashboard')
    }).catch(() => {
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
      value={{ signIn, signUp }
      }
    >
      {children}
    </AuthContext.Provider>
  );

}

export { AuthProvider, useAuth }