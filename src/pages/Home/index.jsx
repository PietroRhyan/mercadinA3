import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'

import api from '../../services/api'

import './styles.css'

export function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      let response = await api.get('/produto')
      setProducts(response.data)
    }

    getProducts()
  }, [])

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="title">Home</h1>

        <section className="productsMenu">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.nome}
              value={product.valor}
              image={product.link}
            />
          ))}
        </section>
      </div>

      <Footer />
    </>
  )
}