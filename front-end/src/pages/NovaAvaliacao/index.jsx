import { Input } from "../../style/inputStyle"
import Base from "../Base"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from "../../components/Button"

const NovaAvaliacao = () => {

    const schema = yup.object().shape({
        titulo: yup.string().required('campo obrigatório').email('e-mail inválido'),
        site: yup.string().required('campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    return (
        <Base>
            <div>
                <form onSubmit={handleSubmit()}>

                    <Input>
                        <input type="text" placeholder="seu e-mail" {...register('titulo')} />
                        <span>{errors.titulo?.message}</span>
                    </Input>

                    <Input>
                        <input type="text" placeholder="seu e-mail" {...register('site')} />
                        <span>{errors.site?.message}</span>
                    </Input>

                    <Button>Iniciar</Button>

                </form>
            </div>
        </Base>
    )
}

export default NovaAvaliacao