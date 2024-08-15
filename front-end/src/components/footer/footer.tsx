import logoFooter from '../../assets/images/footer_ergoframe.png'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logoFooter} alt="Logo Ergoframe" />
      <p>Sobre nós</p>
      <div>
        <ul>
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
          <li><FaLinkedin /></li>
        </ul>
      </div>
    </footer>
  )
}