import { createContext, useContext } from "react";
import { AssessmentContextData } from '../../interfaces/assessment.interface'
import { ProviderProps } from "../../interfaces/authContext.interface";
import { api } from "../services/api";
import { AssessmentType } from "../../types/assessment";


const AssessmentContext = createContext<AssessmentContextData>({} as AssessmentContextData)

const useAssessment = () => useContext(AssessmentContext)

const AssessmentProvider = ({ children }: ProviderProps) => {

  const createAssessment = async () => {

  }

  const getAllAssessment = async (setList: React.Dispatch<React.SetStateAction<AssessmentType[]>>, key?: string) => {

    await api.get('/assessment', { params: { key } }).then(async (res) => {
      setList(res.data)
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