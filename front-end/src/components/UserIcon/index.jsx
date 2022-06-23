import { UserIconStyle } from "./style"
import { useAuth } from "../../providers/AuthContext"
import { FaUser } from "react-icons/fa"

const UserIcon = () => {

    const { signOut } = useAuth()

    return (
        <UserIconStyle>
            <div>
                <FaUser size="20px"></FaUser>
                <divon onClick={() => signOut()}>
                    <p>Sair</p>
                </divon>
            </div>
        </UserIconStyle>
    )
}

export default UserIcon