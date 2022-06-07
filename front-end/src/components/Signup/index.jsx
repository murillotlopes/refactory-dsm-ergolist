import { ContainerHomeForm } from "../../style/homeFormStyle"
import { Input } from "../../style/inputStyle"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from "../Button"


const Signup = ({setAcesso}) => {

    const schema = yup.object().shape({

    })

    const { register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schema)})


    return (
        <ContainerHomeForm>
            <form onSubmit={handleSubmit()}>
                <h3>Cadastre-se</h3>

                <Input>
                    <input type="text" placeholder="seu nome" {...register('name')} />
                    <span>{errors.email?.message}</span>
                </Input>

                <Input>
                    <input type="text" placeholder="seu e-mail" {...register('email')} />
                    <span>{errors.email?.message}</span>
                </Input>

                <Input >
                    <input type="password" placeholder="uma senha bem segura" {...register('password')} />
                    <span>{errors.password?.message}</span>
                </Input>

                <Input >
                    <input type="password" placeholder="agora confirme sua senha" {...register('confirm_password')} />
                    <span>{errors.password?.message}</span>
                </Input>

                <p>Não é cadastrado? <strong onClick={() => setAcesso(true)}>Inscreva-se</strong></p>

                <Button type="submit">Entrar</Button>

            </form>

        </ContainerHomeForm>
    )
}

export default Signup
