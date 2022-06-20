import { Link } from "react-router-dom"
import { ContainerHeader } from "./style"
import Logo from "../../assets/images/logo.png"
import { useAuth } from "../../providers/AuthContext"

const Header = () => {

    const { signOut } = useAuth()

    return (
        <ContainerHeader>
            <div>
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>
            <div>
                <button onClick={() => signOut()}>Sair</button>
            </div>
        </ContainerHeader>
    )
}

export default Header