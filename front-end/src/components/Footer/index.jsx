import { Link } from "react-router-dom"
import { ContainerFooter } from "./sytle"

const Footer = () => {
    return (
        <ContainerFooter>
            <div>
                <ul>
                    <li alt='Laila' title="Laila"><Link to='' target='_blank' without rel="noreferrer">Laila</Link></li>
                    <li alt='Lucas' title="Lucas"><Link to='' target='_blank' without rel="noreferrer">Lucas</Link></li>
                    <li alt='Murillo' title="Murillo"><Link to='' target='_blank' without rel="noreferrer">Murillo</Link></li>
                    <li alt='Valeria' title="Valeria"><Link to='' target='_blank' without rel="noreferrer">Valeria</Link></li>
                </ul>
            </div>
        </ContainerFooter>
    )
}

export default Footer