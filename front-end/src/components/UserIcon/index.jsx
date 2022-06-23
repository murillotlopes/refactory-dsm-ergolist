import { UserIconStyle } from "./style"
import { useAuth } from "../../providers/AuthContext"
import { FaUser } from "react-icons/fa"

const UserIcon = () => {

    const { signOut } = useAuth()

    return (
        <UserIconStyle>
            <div onClick={() => signOut()}>
                <FaUser  size="20px"></FaUser>
                <div>
                    <p>Sair</p>
                </div>
            </div>
        </UserIconStyle> 
    )
}

export default UserIcon