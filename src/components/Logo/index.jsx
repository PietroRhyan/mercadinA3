import { Link } from 'react-router-dom'

import './styles.css'

export function Logo(props) {
  return(
    <>
      <Link to='/'>
        <h2 className="titleLogo" style={{
          fontSize: props.size,
        }}>
          Mercadin<span>A3</span>
        </h2>
      </Link>
    </>
  )
}