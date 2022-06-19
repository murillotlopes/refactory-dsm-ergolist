import { ContainerAvaliacao } from "./style"

const Avaliacao = ({children, ...rest}) => {
    return (
        <ContainerAvaliacao {...rest} >
            {children}
        </ContainerAvaliacao>
    )
}

export default Avaliacao