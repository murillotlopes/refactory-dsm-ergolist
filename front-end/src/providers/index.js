import { AssessmentProvider } from "./AssessmentContext"
import { AuthProvider } from "./AuthContext"
import { QuestionGroupProvider } from "./QuestionGroupContext"

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AssessmentProvider>
        <QuestionGroupProvider>
          {children}
        </QuestionGroupProvider>
      </AssessmentProvider>
    </AuthProvider>
  )
}

export default Providers
