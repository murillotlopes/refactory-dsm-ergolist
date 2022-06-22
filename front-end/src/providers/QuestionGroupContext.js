import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const QuestionGroupContext = createContext()

const useQuestionGroupContext = () => {
    const context = useContext(QuestionGroupContext)
    return context
}

const QuestionGroupProvider = ({ children }) => {

    const [questionGroup, setQuestionGroup] = useState()

    const { token } = useAuth()

    const questionGroupList = () => {
        api.get('/question-group', { headers: { 'x-access-token': token } })
            .then(res => {
                console.log(res.data)
                toast.success('Grupos carregados')
                setQuestionGroup(res.data)
            }).catch(err => {
                console.log(err)
                toast.error('Deu ruim')
            })
    }

    return (
        <QuestionGroupContext.Provider value={{ questionGroupList, questionGroup }}>
            {children}
        </QuestionGroupContext.Provider>
    )
}

export { QuestionGroupProvider, useQuestionGroupContext }