import { Link } from "react-router-dom"
import { ContainerHeader } from "./style"
import Logo from "../../assets/images/logo.png"
import { useAuth } from "../../providers/AuthContext"
import UserIcon from "../UserIcon/index"

const Header = () => {

    const { token } = useAuth()

    return (
        <ContainerHeader>
            <div>
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>
            <div>
                {token ? <UserIcon></UserIcon> : null}

            </div>
        </ContainerHeader>
    )
}

export default Header