import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {
  return (
    <section id='nav-bar'>
      <Link to="/" className='title'>
      <p>EL CEMENTERIO DE LIBROS</p>
      </Link>
      <ul>
        <li>
          <Link to="/categorias/juveniles">JUVENILES</Link>
        </li>
        <li>
          <Link to="/categorias/adultos"> ADULTOS</Link>
        </li>
      </ul>
      <CartWidget />
    </section>

  );
};

export default NavBar;

