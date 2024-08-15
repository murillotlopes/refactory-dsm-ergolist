
import { FaUnlockAlt, FaUser } from 'react-icons/fa'
import { Input } from '../input/input'
import styles from './signup.module.css'
import { useState } from 'react'
import { useAuth } from '../../providers/authContext';
import { tUserRegistration } from '../../../types/signup';

interface SignupProps {
  setAccess: (value: boolean) => void;
}

export const Signup = ({ setAccess }: SignupProps) => {
  const [user, setUser] = useState({ fullname: '', email: '', email_confirm: '', password: '' } as tUserRegistration)
  const { signUp } = useAuth()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp(user)
  }


  return (
    <form onSubmit={handleSubmit}>

      <Input label='Nome' name='fullname' type='text' handleOnChange={handleChange} value={user?.fullname} Icon={FaUser} placeholder='Nome completo' />

      <Input label='E-mail' name='email' type='text' handleOnChange={handleChange} value={user?.email} Icon={FaUser} placeholder='Informe seu e-mail' />

      <Input label='Confirmação de e-mail' name='email_confirm' type='text' handleOnChange={handleChange} value={user?.email_confirm} Icon={FaUser} placeholder='Seu e-mail novamente' />

      <Input label='Senha' name='password' type='password' handleOnChange={handleChange} value={user?.password} Icon={FaUnlockAlt} placeholder='Informe sua senha' />

      <p>Já é cadastrado? <a onClick={() => setAccess(true)}>Acesse sua conta</a></p>

      <input type="submit" value="CADASTRAR" className={styles.btn} />

      <hr />

      <button className={styles.btn} onClick={() => setAccess(true)}>LOGIN</button>

    </form>
  )
}