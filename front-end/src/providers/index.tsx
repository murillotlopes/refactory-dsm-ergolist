import { AuthProvider } from "./authContext"
import { ProviderProps } from '../../interfaces/authContext.interface'


export const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}