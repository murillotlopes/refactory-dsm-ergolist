import { Link } from "react-router-dom"
import { ContainerHeader } from "./style"

const Header = () => {
    return (
        <ContainerHeader>
            <h1><Link to='/'>ErgoFrame</Link></h1>
        </ContainerHeader>
    )
}

export default Header