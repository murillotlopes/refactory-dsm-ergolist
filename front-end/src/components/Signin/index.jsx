//import Button from "../Button"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { ContainerSignin } from './style'
import Button from '../Button'


const Signin = () => {


    const schema = yup.object().shape({
        email: yup.string().required('campo obrigatório').email('e-mail inválido'),
        password: yup.string().required('campo obrigatório')
    })

    const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

    const onSiginin = (data) => {
        console.log(data)
    }


    return (

        <ContainerSignin>
            <form onSubmit={handleSubmit( data => onSiginin(data))}>

                <div >
                    <h3>Acesse sua conta</h3>
                    <div >
                        <input type="text" placeholder="seu e-mail" {...register('email')} />
                    </div>

                    <div >
                        <input type="password"  placeholder="sua senha" {...register('password')} />
                    </div>

                    <div>
                        <Button type="submit">Entrar</Button>
                    </div>

                </div>
            </form>
        </ContainerSignin>
    )
}

export default Signin