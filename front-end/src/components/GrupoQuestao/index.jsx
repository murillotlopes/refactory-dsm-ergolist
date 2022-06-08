import { GroupCardStyle } from "./style"





const GroupCard = ({info}) => {
    const {title, description, progress} = info


    return(
        <GroupCardStyle>
            <h2>{title}</h2>
            <h4>{description}</h4>
           {progress}
        </GroupCardStyle>
    )
}

export default GroupCard