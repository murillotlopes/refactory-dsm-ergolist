import { AssessmentProvider } from "./AssessmentContext"
import { AuthProvider } from "./AuthContext"

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AssessmentProvider>
        {children}
      </AssessmentProvider>
    </AuthProvider>
  )
}

export default Providers
