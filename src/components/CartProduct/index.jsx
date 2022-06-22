import { useState } from "react"
import { FiTrash, FiArrowLeft, FiArrowRight } from "react-icons/fi"

import './styles.css'

export function CartProduct({ image, name, value, provider, inventory }) {
  const [counter, setCounter] = useState(1)

  return (
    <div className="cartProduct">
      <div className="info">
        <div className="cartProductImage">
          <img src={image} alt={name} />
        </div>

        <div className="cartProductInfo">
          <h3>R$ {value}</h3>
          <h4>{name}</h4>
          <small>{provider}</small>

          <i><FiTrash size={18}/></i>
        </div>
      </div>

      <div className="subInfo">
        <div className="counter">
          {counter === 1 ? (
            <span className="counterButton disabled"><FiArrowLeft size={16}/></span>
          ) : (
            <span className="counterButton" onClick={() => setCounter(counter - 1)}><FiArrowLeft size={16}/></span>
          )}

          <span>{counter}</span>

          {counter === inventory ? (
            <span className="counterButton disabled"><FiArrowRight size={16}/></span>
          ) : (
            <span className="counterButton" onClick={() => setCounter(counter + 1)}><FiArrowRight size={16}/></span>
          )}
        </div>

        <p className="amount">{`${inventory} disponíveis`}</p>
      </div>
    </div> 
  )
}