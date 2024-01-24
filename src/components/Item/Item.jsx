import { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({producto}) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave= () => {
    setZoom(false);
  };

  const estiloCard = {
    transform : zoom ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out'
  }

  return (
    <li
    style={estiloCard}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    className="card ">
    
                                  <img className="image" src={producto.imgUrl}  alt={producto.nombre} />
                                  <h6 className="titulo">{producto.titulo}</h6>
                                  <p> Autor: {producto.autor}</p>
                                  <p>{producto.genero}</p>
                                  <Link to={`/detalle/${producto.id}`} className= "link">
                                    Ver más
                                    </Link>                     
      </li> 
                              
  );
};

export default Item;

