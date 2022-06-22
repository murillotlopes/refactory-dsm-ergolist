import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const QuestionContext = createContext()

const useQuestion = () => {
    const context = useContext(QuestionContext)
    return context
}

const QuestionProvider = ({ children }) => {

    const { token } = useAuth()

    const [question, setQuestion] = useState()

    const QuestionList = () => {
        api.get('/question', { headers: { 'x-access-token': token } })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('@ergoframe:questionList', JSON.stringify(res.data))
                setQuestion(res.data)
                toast.success('As perguntas foram carregadas corretamente.')
            }).catch(err => {
                toast.error('Tivemos algum problema pedimos desculpas.\nTente realizar seu login novamente!')
            })
    }

    return (
        <QuestionContext.Provider value={{ QuestionList, question }}>
            {children}
        </QuestionContext.Provider>
    )
}

export { QuestionProvider, useQuestion }