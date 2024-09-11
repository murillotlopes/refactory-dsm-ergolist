import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import logo from '../../assets/images/logo.png'

import styles from './defaultPage.module.css'
import { ProviderProps } from "../../../interfaces/authContext.interface"

export const DefaultPage = ({ children }: ProviderProps) => {
  return (
    <>
      <main className={styles.mainMobile}>
        <img src={logo} alt="Ergoframe logo" />
        {children}
      </main>

      <main className={styles.mainNotMobile}>
        <Header />

        <div className={styles.content}>
          {children}
        </div>

        <Footer />

      </main>
    </>
  )
}