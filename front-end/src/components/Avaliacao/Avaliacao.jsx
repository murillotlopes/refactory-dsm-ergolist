import { ContainerAvaliacao } from "./style"
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useHistory } from "react-router-dom"

const Avaliacao = ({ assessment }) => {

    const history = useHistory()


    return (
        <ContainerAvaliacao onClick={() => history.push(`/groupquestion/${assessment._id}`)} >
            <h4>{assessment.title}</h4>
            {!assessment.closed ? <i>{AiOutlineCheckCircle}</i> : null}
        </ContainerAvaliacao>
    )
}

export default Avaliacao