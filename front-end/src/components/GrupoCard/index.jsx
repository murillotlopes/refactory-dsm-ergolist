import { GroupCardStyle } from "./style"
// import ProgressBar from 'react-bootstrap/ProgressBar'

import ProgressBar from "@ramonak/react-progress-bar";


const GroupCard = ({info}) => {
    const {title, description, progress, maxProgress} = info

    

    return(
        <GroupCardStyle>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <ProgressBar completed={progress} maxCompleted={maxProgress} isLabelVisible={false} bgColor="var(--secundary-blue)" margin="62.5% 0" height="0.65em" initCompletedOnAnimation={true}/>            
        </GroupCardStyle>
    )
}

export default GroupCard