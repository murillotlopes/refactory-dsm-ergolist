import { ObjectId } from "mongodb"

export type QuestionType = {
  number: number,
  enunciation: string,
  glossaryItem: string[],
  group?: ObjectId
}