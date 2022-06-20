import { FiShoppingCart } from 'react-icons/fi'

import './styles.css'

export function Product({ name, value, provider, image }) {
  return (
    <div className="product">
      <div className="productImage">
        <img src={image} alt={name} />
      </div>

      <hr />

      <div className="productInfo">
        <h3>R$ {value}</h3>
        <h4>{name}</h4>
        <small>{provider}</small>

        <div className="cart">
          <FiShoppingCart size={20} />
        </div>
      </div>
    </div>
  )
}