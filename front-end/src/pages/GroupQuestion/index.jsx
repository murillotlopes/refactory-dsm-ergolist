import GroupCard from "../../components/GroupCard"
import Button from "../../components/Button"
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

                <Button> Finalizar </Button>
            </ContainerGroupQuestion>    
        </Base>
    )
}

export default GroupQ