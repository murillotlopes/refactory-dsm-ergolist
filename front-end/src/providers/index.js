import { AssessmentProvider } from "./AssessmentContext"
import { AuthProvider } from "./AuthContext"
import { QuestionProvider } from "./QuestionContex"
import { QuestionGroupProvider } from "./QuestionGroupContext"

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AssessmentProvider>
        <QuestionGroupProvider>
          <QuestionProvider>
            {children}
          </QuestionProvider>
        </QuestionGroupProvider>
      </AssessmentProvider>
    </AuthProvider>
  )
}

export default Providers
