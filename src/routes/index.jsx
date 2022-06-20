import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

export function PageRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  )
}