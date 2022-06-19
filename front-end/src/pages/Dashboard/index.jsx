import { Link } from "react-router-dom"
import Base from "../Base"
import { ContainerDash, NovaAvaliacao } from "./style"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../style/inputStyle'
import Avaliacao from '../../components/Avaliacao/Avaliacao'
import { ContainerHomeForm } from "../../style/homeFormStyle"

const Dashboard = () => {
    const schema = yup.object().shape({
        pesquisar: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onAvaliacao = (data) => {
        console.log(data)
    }

    return(
        <Base>
        <ContainerDash>
            <div>
                <Link to='/nova-avaliacao'>
                <NovaAvaliacao>
                    <h3>Nova avaliação</h3>
                </NovaAvaliacao>
                </Link>
            </div>
            <div>
                <ContainerHomeForm>
                    <form onSubmit={handleSubmit(onAvaliacao)}>
                        <h3>Avaliações Anteriores</h3>
                        <Input>
                            <input type="text" placeholder="Pesquisar" {...register('pesquisar')} />
                            <span>{errors.pesquisar?.message}</span>
                        </Input>
                        <Avaliacao>
                            <p> Avaliação 1</p>
                        </Avaliacao>
                        <Avaliacao>
                            <p> Avaliação 2</p>
                        </Avaliacao>
                        <Avaliacao>
                            <p> Avaliação 3</p>
                        </Avaliacao>
                    </form>
                </ContainerHomeForm>
            </div> 
        </ContainerDash>
    </Base>
    )
}

export default Dashboard