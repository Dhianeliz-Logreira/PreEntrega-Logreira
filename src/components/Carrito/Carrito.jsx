import { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";
import { Link } from "react-router-dom";

import "./carrito.css";

const Carrito = () => {
  const {carrito, borrarCarrito, borrarProducto, totalPrecio} = useContext(CartContext)

if (carrito.length === 0) {
  return(
    <div className="carrito-vacio">
      <img src="./carro (1).png" alt="" />
      <h2>CARRITO VACÍO</h2>
      <Link className="button" to = "/">Volver al inicio</Link>
    </div>
  );
}

  return (
    <div className="carrito">
      <ul className="lista">
      {carrito.map((producto)=> (
          <li className="producto" key={producto.id}>
            <img className="imagen"
            src={producto.imgUrl} 
            alt={producto.nombre} 
            />
            <p className="texto nombre">{producto.titulo}</p>
            <p className="texto">$ {producto.precio}</p>
            <button className="borrar" onClick={() => borrarProducto(producto.id)}> Eliminar </button>
            </li>
        ))}
      </ul>
      <p>Total a pagar:{totalPrecio()}</p>
      <button className="botones-carrito-borrar" onClick={borrarCarrito}>Eliminar Carrito</button>
      <Link className="botones-carrito-continuar" to="/checkout">
          <p>Continuar con mi compra</p>
      </Link>
    </div>
  );
};


export default Carrito;