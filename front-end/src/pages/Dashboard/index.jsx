import { Link } from "react-router-dom"
import Base from "../Base"
import { ContainerDash, NovaAvaliacao, InputDash } from "./style"
import Pesquisa from '../../assets/images/pesquisa.png'

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
                <InputDash>
                    <input type="text" placeholder="Pesquisar" /><img src={Pesquisa} alt="pesquisa" />
                    <input type="text" placeholder="Avaliação 1" />
                    <input type="text" placeholder="Avaliação 2" />
                    <input type="text" placeholder="Avaliação 3" />
                </InputDash>
            </div>
        </ContainerDash>
        </Base>
    )
}

export default Dashboard