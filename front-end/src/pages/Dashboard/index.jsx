import { Link } from "react-router-dom"
import Base from "../Base"
import { ContainerDash, NovaAvaliacao } from "./style"
import { Input } from '../../style/inputStyle'


const Dashboard = () => {
    return(
        <Base>
        <ContainerDash>
            <div>
                <Link to='/nova-avaliacao'>
                <NovaAvaliacao>
                    <h3>Nova avaliação</h3>
                </NovaAvaliacao>
                </Link>
            </div>
            <div>
                <Input>
                    <input type="text" placeholder="Pesquisar" />
                </Input>
            </div>
        </ContainerDash>
        </Base>
    )
}

export default Dashboard