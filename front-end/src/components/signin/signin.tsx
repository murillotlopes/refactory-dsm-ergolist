
import { FaUnlockAlt, FaUser } from 'react-icons/fa'
import { Input } from '../input/input'
import styles from './signin.module.css'
import { useState } from 'react'
import { useAuth } from '../../providers/authContext';
import { SigninProps } from '../../../interfaces/signin.interface'
import { tLogin } from '../../../types/signin'


export const Signin = ({ setAccess }: SigninProps) => {
  const [login, setLogin] = useState({ email: '', password: '' } as tLogin)
  const { signIn } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn(login)
  }


  return (
    <form onSubmit={handleSubmit}>

      <Input label='E-mail' name='email' type='text' handleOnChange={handleChange} value={login?.email} Icon={FaUser} placeholder='Informe seu e-mail' />

      <Input label='Senha' name='password' type='password' handleOnChange={handleChange} value={login?.password} Icon={FaUnlockAlt} placeholder='Informe sua senha' />

      <p>Não é cadastrado? <a onClick={() => setAccess(false)}>Inscreva-se</a></p>

      <input type="submit" value="ENTRAR" className={styles.btn} />

      <hr />

      <button className={styles.btn} onClick={() => setAccess(false)}>REGISTRAR-SE</button>

    </form>
  )
}