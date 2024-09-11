import { AssessmentType } from "../types/assessment"

export interface AssessmentContextData {
  createAssessment: () => Promise<void>
  getAllAssessment: (setList: React.Dispatch<React.SetStateAction<AssessmentType[]>>, key?: string) => Promise<void>
}

export interface AssessmentProps {
  assessment: AssessmentType;
}