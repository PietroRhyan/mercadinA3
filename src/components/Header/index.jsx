import { FiShoppingCart } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Logo } from '../Logo'

import './styles.css'

export function Header() {
  return (
    <header className="header">
      <Logo size='1.8rem' />

      <nav>
        <ul>
          <Link to='/cadastro-de-produtos'><li>Produtos</li></Link>
          <Link to='/cadastro-de-fornecedores'><li>Fornecedores</li></Link>
          <Link to='/carrinho'>
            <button className='cartBtn'>
              <span>Carrinho</span>
              <i><FiShoppingCart/></i>
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  )
}