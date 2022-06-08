import GroupCard from "../../components/GrupoQuestao"
import Base from "../Base"

import informacao from '../../components/GrupoQuestao/ob'
import { ContainerGroupQuestion } from "./style"

const GroupQ = () => {
    return(
        <Base>
            <ContainerGroupQuestion>
                {informacao.map(info => {
                    return <GroupCard info={info}/>}
                    )}   
            </ContainerGroupQuestion>    
        </Base>
    )
}

export default GroupQ