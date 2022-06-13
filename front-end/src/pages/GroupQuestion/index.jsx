import GroupCard from "../../components/GroupCard"
import Base from "../Base"

import informacao from '../../components/GroupCard/ob'
import { ContainerGroupQuestion } from "./style"

const GroupQ = () => {
    return(
        <Base>
            <ContainerGroupQuestion>
                {informacao.map(info => {
                    return <GroupCard info={info}/>}
                    )}   

                <button> Finalizar </button>
            </ContainerGroupQuestion>    
        </Base>
    )
}

export default GroupQ