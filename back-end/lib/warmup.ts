import Glossary from "../models/Glossary"
import data from '../data/data'
import QuestionGroup from "../models/QuestionGroup"
import Question from '../models/Question';


const warmup = async () => {
  const glossaries = await Glossary.find();

  if (glossaries.length !== data.glossaries.length) {
    for (const glossary of data.glossaries) {
      if (!await Glossary.findOne({ entry: glossary.entry })) {
        await Glossary.create(glossary);
      }
    }
  }

  for (const questionGroup of data.question_groups) {
    let group = await QuestionGroup.findOne({ group: questionGroup.group });

    if (!group) {
      group = await QuestionGroup.create(questionGroup);
    }

    for (const question of questionGroup.questions) {
      const existingQuestion = await Question.findOne({ number: question.number, group: group._id });

      if (!existingQuestion) {
        question.group = group._id;
        await Question.create(question);
      }
    }
  }
}


export default warmup