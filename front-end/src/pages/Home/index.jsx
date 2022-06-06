import Carrossel from "../../components/Carrossel"
import Signin from "../../components/Signin"
import Base from "../Base"
import { ContainerHome } from "./style"

const Home = () => {
    return (
        <Base>
            <ContainerHome>

                <aside>
                    <Carrossel />
                </aside>

                <aside>
                    <Signin />
                </aside>

            </ContainerHome>
        </Base>
    )
}

export default Home