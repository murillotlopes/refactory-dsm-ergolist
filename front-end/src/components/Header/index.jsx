import { Link } from "react-router-dom"
import { ContainerHeader } from "./style"
import Logo from "../../assets/images/logo.png"

const Header = () => {
    return (
        <ContainerHeader>
            <Link to='/'><img src={ Logo } alt="logo" /></Link>
        </ContainerHeader>
    )
}

export default Header