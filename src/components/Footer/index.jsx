import { FiInstagram, FiGithub } from 'react-icons/fi'
import { Logo } from '../Logo'

import './styles.css'

export function Footer() {
  return(
    <footer className="footer">
      <Logo size='1.5rem' />

      <div className='socialMediaContainer'>
        <ul>
          <a href='https://www.instagram.com/pietro_rhyann/' target='_blank'>
            <li>
              <i><FiInstagram  className='icon' /></i>
              @pietrorhyann
            </li>
          </a>
          <a href='https://www.instagram.com/davydmoreno1803/' target='_blank'>
            <li>
              <i><FiInstagram  className='icon' /></i>
              @davydmoreno1803
            </li>
          </a>
          <a href='https://github.com/FernandoJuni0r' target='_blank'>
            <li>
              <i><FiGithub className='icon' /></i>
              FernandoJuni0r
            </li>
          </a>
        </ul>
      </div>

      <p>&copy; Todos os direitos reservados. Feito com amor 💚 pelos alunos mais lindos de TI</p>
    </footer>
  )
}