import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'

import './styles.css'

export function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <h1 className="title">Home</h1>

        <section className="productsMenu">
          <Product 
            name='Tênis louco'
            value= {12.99}
            provider='Seu João'
            image='https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'
          />
          <Product 
            name='Tênis louco 2'
            value= {50.99}
            provider='Seu João'
            image='https://assets.adidas.com/images/w_600,f_auto,q_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg'
          />
          <Product 
            name='Tênis louco 3'
            value= {45.99}
            provider='Seu João'
            image='https://images.lojanike.com.br/1024x1024/produto/tenis-wmns-nike-ad-comfort-DJ1001-002-1-11621542982.jpg'
          />
          <Product 
            name='Tênis louco 4'
            value= {24.24}
            provider='Seu João'
            image='https://assets.adidas.com/images/w_600,f_auto,q_auto/605a273651d8486199c4add501597f02_9366/Tenis_Sao_Paulo_FC_Runfalcon_2.0_Preto_GA0405_01_standard.jpg'
          />
          <Product 
            name='Tênis louco 5'
            value= {66.66}
            provider='Seu João'
            image='https://static.lojanba.com/produtos/tenis-nike-lebron-witness-v/44/HZM-4279-544/HZM-4279-544_zoom1.jpg?ts=1626300263'
          />
        </section>
      </div>

      <Footer />
    </>
  )
}