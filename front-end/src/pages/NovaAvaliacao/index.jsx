import { Link } from "react-router-dom"
import { Input } from "../../style/inputStyle"
import Base from "../Base"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from "../../components/Button"
import { ContainerNovaAvaliacao } from "./style"
import { ContainerHomeForm } from "../../style/homeFormStyle"

const NovaAvaliacao = () => {

    const schema = yup.object().shape({
        titulo: yup.string().required('campo obrigatório'),
        site: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onNovaAvaliacao = (data) => {
        console.log(data)
    }

    return (
        <Base>
            <ContainerNovaAvaliacao>
                <ContainerHomeForm>

                    <form onSubmit={handleSubmit(onNovaAvaliacao)}>

                        <h3>Cadastrar uma nova avaliação</h3>

                        <Input>
                            <input type="text" placeholder="Titulo da sua avaliação" {...register('titulo')} />
                            <span>{errors.titulo?.message}</span>
                        </Input>

                        <Input>
                            <input type='text' placeholder="Endereço do seu site" {...register('site')} />
                            <span>{errors.site?.message}</span>
                        </Input>

                        <Button>Iniciar</Button>

                        <Link to= '/dashboard' onClick={handleSubmit}><Button>Voltar</Button></Link>
                        

                    </form>
                </ContainerHomeForm>
            </ContainerNovaAvaliacao>
        </Base>
    )
}

export default NovaAvaliacao