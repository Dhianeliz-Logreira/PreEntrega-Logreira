import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../contexto/CartContext";
import "./itemdetail.css"

const ItemDetail = ({ producto }) => {
    const [boton, setBoton ] = useState (false);
    const {añadirProducto} = useContext(CartContext)

    const AgregarAlCarrito = (contador) =>{
        const productoNuevo = {...producto, cantidad: contador}
        añadirProducto(productoNuevo)
        setBoton(true);
    };

    return (
        <article className="item-detail">
            <img src={producto.imgUrl} alt="" />
            <h6>{producto.titulo}</h6>
            <p> Autor: {producto.autor}</p>
            <p>{producto.genero}</p>
            <p>$ {producto.precio}</p>
            {boton ? (
                <>
                    <Link className="button-terminar" to="/carrito">Terminar la compra</Link>
                    <Link className="button-terminar" to= "/"> Seguir comprando</Link>
                    </>
                ) : (
                    <ItemCount 
                    stock={producto.stock}
                    AgregarAlCarrito={AgregarAlCarrito}
                    />
                )}
        </article>
    );
};

export default ItemDetail;
