import { createContext, useContext } from "react";
import { AssessmentContextData } from '../../interfaces/assessment.interface'
import { ProviderProps } from "../../interfaces/authContext.interface";
import { api } from "../services/api";
import { AssessmentType } from "../../types/assessment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";


const AssessmentContext = createContext<AssessmentContextData>({} as AssessmentContextData)

const useAssessment = () => useContext(AssessmentContext)

const AssessmentProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate()
  const { userId } = useAuth()


  const getAllAssessment = async (setList: React.Dispatch<React.SetStateAction<AssessmentType[]>>, key?: string) => {

    await api.get('/assessment', { params: { key } }).then(async (res) => {
      setList(res.data)
    }).catch(() => {

    })
  }

  const createAssessment = async (assessment: AssessmentType) => {

    await api.post('/assessment', { ...assessment, user: userId }).then(async (res) => {
      toast.success('Avaliação cadastrada!')
      navigate(`/groupquestion/${res.data._id}`)
    }).catch(() => {

    })

  }

  return (
    <AssessmentContext.Provider
      value={{ createAssessment, getAllAssessment }}
    >{children}</AssessmentContext.Provider>
  )

}

export { AssessmentProvider, useAssessment }