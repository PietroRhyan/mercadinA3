import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductsRegistration } from '../pages/ProductsRegistration'
import { ProvidersRegistration } from '../pages/ProvidersRegistration'
import { Cart } from '../pages/Cart'

export function PageRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/cadastro-de-produtos' element={<ProductsRegistration />} />
      <Route exact path='/cadastro-de-fornecedores' element={<ProvidersRegistration />} />
      <Route exact path='/carrinho' element={<Cart />} />
    </Routes>
  )
}