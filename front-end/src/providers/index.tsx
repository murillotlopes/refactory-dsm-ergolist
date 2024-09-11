import { AuthProvider } from "./authContext"
import { ProviderProps } from '../../interfaces/authContext.interface'
import { AssessmentProvider } from "./assessmentContext"


export const Providers = ({ children }: ProviderProps) => {
  return (
    <AssessmentProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </AssessmentProvider>
  )
}