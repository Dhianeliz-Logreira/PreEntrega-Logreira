import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true)

    let consulta 
    const productosRef = collection (db, "productos");

    if(categoria){
      //filtrar data
      consulta = query(productosRef, where("categoria","==", categoria))
    }else{
      //traer la data
      consulta = productosRef
    }

    getDocs(consulta).then((respuesta)=> {
        let productosDb = respuesta.docs.map((producto)=> {
          return { id: producto.id, ...producto.data()  };
        });
        setProductos(productosDb)
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
  }, [categoria]);


  return (
    <>
      {cargando ? (

        <DotLoader color="#a873dd" />
      ) : (
        <div>
          <ItemList productos={productos} />
        </div>

      )}
    </>
  )
}

export default ItemListContainer;

