import { ContainerHomeForm } from "../../style/homeFormStyle"
import { Input } from "../../style/inputStyle"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from "../Button"


const Signup = ({ setAcesso }) => {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        confirm_email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório')
        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSignup = (data) => {
        console.log(data)
    }


    return (
        <ContainerHomeForm>
            <form onSubmit={handleSubmit(onSignup)}>
                <h3>Cadastre-se</h3>

                <Input>
                    <input type="text" placeholder="Nome completo" autoFocus {...register('name')} />
                    <span>{errors.email?.message}</span>
                </Input>

                <Input>
                    <input type="email" placeholder="E-mail" {...register('email')} />
                    <span>{errors.email?.message}</span>
                </Input>

                <Input >
                    <input type="email" placeholder="Confirmar e-mail" {...register('confirm_email')} />
                    <span>{errors.password?.message}</span>
                </Input>

                <Input >
                    <input type="password" placeholder="Senha" {...register('password')} />
                    <span>{errors.password?.message}</span>
                </Input>

                <p>Já é cadastrado? <strong onClick={() => setAcesso(true)}>Acesse sua conta.</strong></p>

                <Button type="submit">Cadastrar</Button>

            </form>

        </ContainerHomeForm>
    )
}

export default Signup
