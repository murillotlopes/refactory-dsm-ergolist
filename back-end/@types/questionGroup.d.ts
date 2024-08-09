import { QuestionType } from "./question"

export type QuestionGroupType = {
  group: string,
  description: string,
  questions: QuestionType[]
}
