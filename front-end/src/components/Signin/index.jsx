import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import { Input } from '../../style/inputStyle'
import { ContainerHomeForm } from '../../style/homeFormStyle'
import { FaLock, FaUser } from "react-icons/fa"

const Signin = ({ setAcesso }) => {



    const schema = yup.object().shape({
        email: yup.string().required('campo obrigatório').email('e-mail inválido'),
        password: yup.string().required('campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSiginin = (data) => {
        console.log(data)
    }


    return (

        <ContainerHomeForm>
            <form onSubmit={handleSubmit(onSiginin)}>
                <h3>Login</h3>

                <Input>
                    <input type="text" placeholder="E-mail" autoFocus {...register('email')}/>
                    <span>{errors.email?.message}</span>
                </Input>

                <Input >
                    <input type="password" placeholder="Senha" {...register('password')}/>
                    <span>{errors.password?.message}</span>
                </Input>

                <p>Não é cadastrado? <strong onClick={() => setAcesso(false)}>Inscreva-se.</strong></p>

                <Button type="submit">Entrar</Button>

            </form>
        </ContainerHomeForm>
    )
}

export default Signin