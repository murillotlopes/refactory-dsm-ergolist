import { GroupCardStyle, ProgressBarStyle } from "./style"

import ProgressBar from "@ramonak/react-progress-bar";
import { useHistory, useParams } from "react-router-dom";
import { useQuestion } from "../../providers/QuestionContex";


const GroupCard = ({ info }) => {
  const history = useHistory()
  const params = useParams()
  const { question, currentQuestionByGroup } = useQuestion()
  const { group, description } = info
  const progress = 10
  const maxProgress = 100

  const generateList = async () => {
    const currentQuestionList = await question.filter(item => item.group._id === info._id)
    currentQuestionByGroup(currentQuestionList)
    history.push(`/groupquestion/${params.assessmentId}/questao/${currentQuestionList[0]._id}`)
  }

  return (
    <GroupCardStyle onClick={() => generateList()}>
      <ProgressBarStyle>
        <ProgressBar completed={progress} maxCompleted={maxProgress} isLabelVisible={false} bgColor="var(--secundary-blue)" margin="0px 0 18px 0" height="5px" initCompletedOnAnimation={true} />
      </ProgressBarStyle>
      <div>
        <h2>{group}</h2>
        <p>{description}</p>
      </div>
    </GroupCardStyle>
  )
}

export default GroupCard