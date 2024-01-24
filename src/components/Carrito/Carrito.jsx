import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {
  const {carrito, borrarCarrito, borrarProducto, totalPrecio} = useContext(CartContext)

if (carrito.length === 0) {
  return(
    <div className="inicio">
      <h2>CARRITO VACIO!</h2>
      <Link to = "/">Volver al inicio</Link>
    </div>
  )
}

  return (
    <div>
      <ul style={{display: "flex"}}>
      {carrito.map((producto)=> (
          <li key={producto.id}
          style={{
            border: "1px solid black",
            listStyle: "none",
            margin: "0 20px",
          }}
          >
            <img src={producto.imgUrl} 
            alt={producto.nombre} 
            style={{width: "100px"}} />
            <p>{producto.titulo}</p>
            <p>$ {producto.precio}</p>
            <button onClick={() => borrarProducto(producto.id)}>Eliminar</button>
            </li>
        ))}
      </ul>
      <h3>precio:{totalPrecio()}</h3>
      <button onClick={borrarCarrito}>Eliminar Carrito</button>
      <Link to="/checkout">
          Continuar con mi compra
      </Link>
    </div>
  )
}


export default Carrito