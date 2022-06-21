import { GroupCardStyle } from "./style"

import ProgressBar from "@ramonak/react-progress-bar";


const GroupCard = ({ info }) => {
  const { group, description } = info
  const progress = 10
  const maxProgress = 100

  return (
    <GroupCardStyle>
      <h2>{group}</h2>
      <h4>{description}</h4>
      <ProgressBar completed={progress} maxCompleted={maxProgress} isLabelVisible={false} bgColor="var(--secundary-blue)" margin="40% 0" height="0.65em" initCompletedOnAnimation={true} />
    </GroupCardStyle>
  )
}

export default GroupCard