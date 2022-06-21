import { createContext, useContext } from "react"
import toast from "react-hot-toast"
import { useHistory } from "react-router-dom"
import api from "../services/api"
import { useAuth } from "./AuthContext"

const AssessmentContext = createContext()

const useAssessmentContext = () => {
    const context = useContext(AssessmentContext)
    return context
}

const AssessmentProvider = ({ children }) => {
    const history = useHistory()
    const { token, userid } = useAuth()

    const createAssessment = ({ title, description, url }) => {

        api.post('/assessment', { title, description, url, user: userid }, { headers: { 'x-access-token': token } })
            .then(res => {
                console.log(res)
                history.push(`/nova-avaliacao/${res.data._id}`)
                toast.success('Nova avaliação cadastrada!')
            }).catch(err => {
                console.log(err)
                toast.error('Algo não ocorreu como esperado.\nTente novamente!')
            })
    }


    return (
        <AssessmentContext.Provider value={{ createAssessment }}>
            {children}
        </AssessmentContext.Provider>
    )
}

export { AssessmentProvider, useAssessmentContext }