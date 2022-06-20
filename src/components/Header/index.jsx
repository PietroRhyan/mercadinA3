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
          <Link to='/produtos'><li>Produtos</li></Link>
          <Link to='/categorias'><li>Categorias</li></Link>
          <Link to='/fornecedores'><li>Fornecedores</li></Link>
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