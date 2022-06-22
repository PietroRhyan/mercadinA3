import { CartProduct } from "../../components/CartProduct";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import './styles.css'

export function Cart() {
  return (
    <>
      <Header/>

      <div className="container">
        <h1 className="title">Carrinho</h1>

        <section className="content">
          <div>
            <CartProduct 
              name='Tênis louco'
              value= {12.99}
              provider='Seu João'
              image='https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'
              inventory={5}
            />
            <CartProduct 
              name='Tênis louco'
              value= {12.99}
              provider='Seu João'
              image='https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'
              inventory={5}
            />
          </div>

          <div className="payment">
            <div className="pricing">
              <div>
                <h3>Subtotal:</h3>
                <p className="unitValue">R$ 12.99</p>
                <p className="unitValue">R$ 12.99</p>
              </div>

              <div>
                <h3>Total:</h3>
                <h2 className="totalValue">R$ 25.98</h2>
              </div>
            </div>

            <hr />

            <button type='button'>Realizar compra</button>
          </div>
        </section>
      </div>

      <Footer/>
    </>
  )
}