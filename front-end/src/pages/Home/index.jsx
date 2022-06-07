import { useState } from "react"
import Carrossel from "../../components/Carrossel"
import Signin from "../../components/Signin"
import Signup from "../../components/Signup"
import Base from "../Base"
import { ContainerHome } from "./style"

const Home = () => {

    const [acesso, setAcesso] = useState(true)

    return (
        <Base>
            <ContainerHome>

                <aside>
                    <Carrossel />
                </aside>

                <aside>
                    {acesso ? <Signin setAcesso={setAcesso} /> : <Signup setAcesso={setAcesso}/>}
                </aside>

            </ContainerHome>
        </Base>
    )
}

export default Home