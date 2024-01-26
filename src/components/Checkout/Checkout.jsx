import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../contexto/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom"

import "./checkout.css"


const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailRepetido: ""
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext)

    const guardarDatosInput = (event) =>{
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrden = (event) =>{
        event.preventDefault();
        if(datosForm.email === datosForm.emailRepetido){
            const orden = {
                comprador: {...datosForm},
                productos: [...carrito],
                fecha: new Date(),
                total: totalPrecio(),
            }; 

        subirOrden(orden);
        }else{
        alert("los email no son iguales")
        }
        };

    const subirOrden = (orden) =>{
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef,orden )
            .then((respuesta)=>  {
                setIdOrden(respuesta.id)
                //limpiar carrito
                borrarCarrito()
            });
    };

return (
    <div className="checkout">
    {idOrden ? (
            <div className="orden">
                <img src="./verificar.png" alt="" />
                <h2>Orden generada exitosamente c:</h2>
                <p>Nª de orden: {idOrden} </p>
                <Link className= "boton-orden" to="/">Ver más productos</Link>
                </div>
        ) : (
            <Form datosForm={datosForm} 
            guardarDatosInput={guardarDatosInput} 
            enviarOrden={enviarOrden}/>
        )}
    </div>
);
};

export default Checkout;