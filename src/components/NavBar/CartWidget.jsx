import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
  const {carrito, totalCantidad} = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget">
      <img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="" width={35} />
    { carrito.length !== 0 && <p>{totalCantidad()}</p> }
    </Link>
  );
};

export default CartWidget;




