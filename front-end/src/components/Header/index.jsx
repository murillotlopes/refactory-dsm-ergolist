import { Link } from "react-router-dom"
import { ContainerHeader } from "./style"
import Logo from "../../assets/images/logo.png"
import { useAuth } from "../../providers/AuthContext"
import UserIcon from "../UserIcon/index"

const Header = () => {

    return (
        <ContainerHeader>
            <div>
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>
            <div>
                <UserIcon></UserIcon>
            </div>
        </ContainerHeader>
    )
}

export default Header