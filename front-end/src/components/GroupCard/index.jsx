import { GroupCardStyle, ProgressBarStyle } from "./style"

import ProgressBar from "@ramonak/react-progress-bar";


const GroupCard = ({ info }) => {
  const { group, description } = info
  const progress = 10
  const maxProgress = 100

  return (
    <GroupCardStyle>
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