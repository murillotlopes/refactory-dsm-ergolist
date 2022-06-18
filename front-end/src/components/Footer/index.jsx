import { ContainerFooter } from "./sytle"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <ContainerFooter>
            <img src={ require('../../assets/images/logo_footer.png')} alt="logo" />
             <div>
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                </ul>
            </div>
        </ContainerFooter>
    )
}

export default Footer