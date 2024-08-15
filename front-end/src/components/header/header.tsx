
import logo from '../../assets/images/logo.png'

import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="Ergoframe logo" />
    </header>
  )
}