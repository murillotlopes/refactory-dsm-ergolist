import { useHistory } from "react-router-dom"
import Base from "../Base"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from "../../components/Button"
import { ContainerNovaAvaliacao } from "./style"
import { ContainerHomeForm } from "../../style/homeFormStyle"
import { useAssessmentContext } from "../../providers/AssessmentContext"

const NovaAvaliacao = () => {

    const history = useHistory()
    const { createAssessment } = useAssessmentContext()

    const schema = yup.object().shape({
        title: yup.string().required('campo obrigatório'),
        description: yup.string(),
        url: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onNovaAvaliacao = (data) => {
        createAssessment(data)
    }

    return (
        <Base>
            <ContainerNovaAvaliacao>
                <ContainerHomeForm>

                    <form onSubmit={handleSubmit(onNovaAvaliacao)}>

                        <h3>Cadastre uma nova avaliação</h3>

                        <div className="col-md-10 m-2">
                            <input type="text" className="form-control" placeholder="Dê um nome para sua avaliação" {...register('title')} required />
                            {!!errors.title?.message ? (<small>{errors.title?.message}</small>) : null}
                        </div>

                        <div className="col-md-10 m-2">
                            <input type="text" className="form-control" placeholder="Endereço do seu site avaliado" {...register('url')} />
                            {!!errors.url?.message ? (<small>{errors.url?.message}</small>) : null}
                        </div>

                        <div className="col-md-10 m-2">
                            <textarea className="form-control" rows='3' placeholder="Uma descrição para sua avaliação" {...register('description')} />
                            {!!errors.description?.message ? (<small>{errors.description?.message}</small>) : null}
                        </div>

                        <Button type='submit' className='m-3'>Iniciar</Button>

                        <Button onClick={() => history.push('/dashboard')} >Voltar</Button>

                    </form>
                </ContainerHomeForm>
            </ContainerNovaAvaliacao>
        </Base>
    )
}

export default NovaAvaliacao