import {useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, AgregarAlCarrito}) => {
const [contador, setContador] = useState(1);

const sumar = () => {
    if( contador < stock ){
setContador(contador + 1);
}
};

const restar = () => {
    if(contador > 1){
    setContador(contador - 1);
}
};

  return (
    <div className="item-count">
      <div className="botones">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        </div>
        <button onClick={() => AgregarAlCarrito(contador) } className="comprar">Comprar</button>
    </div>
  );
};

export default ItemCount;