import example from '../../assets/images/example.jpeg'
import logo from '../../assets/images/logo.png'

import styles from './home.module.css'

import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Signin } from '../../components/signin/signin'
import { useState } from 'react'
import { Signup } from '../../components/signup/signup'

export const Home = () => {

  const [access, setAccess] = useState(true)

  return (
    <>

      <main className={styles.mainMobile}>
        {access ? <img src={logo} alt="Ergoframe logo" /> : <p>Crie sua conta para acessar o Ergoframe</p>}
        {access ? <Signin setAccess={setAccess} /> : <Signup setAccess={setAccess} />}
      </main>

      <main className={styles.mainNotMobile}>
        <Header />

        <div className={styles.content}>

          <aside className={styles.childrenContent}>
            <img src={example} alt="Exemplo de carrossel" />
          </aside>

          <aside className={styles.childrenContent}>
            {access ? <h2>LOGIN</h2> : <h2>CADASTRE-SE</h2>}
            {access ? <Signin setAccess={setAccess} /> : <Signup setAccess={setAccess} />}
          </aside>

        </div>

        <Footer />

      </main>

    </>
  )

}