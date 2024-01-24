import { useState } from "react"

const EjemploFormulario = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")

    const cambiarNombre = (event) => {
        setNombre(event.target.value)
    }

    const cambiarDireccion = (event) => {
        setDireccion(event.target.value)
    }

    const cambiarEmail = (event) => {
        setEmail(event.target.value)
    }

    const enviarFormulario = (event) => {
        event.preventDefault() //ayuda a que no envie los datos como queryparamts, esto hace ue se no actualice la pag y perder todos los datos en el form
        const usuario = {nombre, direccion, email}
        console.log(usuario)
    }

    return (
        <form onSubmit={enviarFormulario} style={{ padding: "100px" }}>
            <label>
                Nombre: <input type="text" value={nombre} onChange={cambiarNombre} />
            </label>

            <label>
                Direccion: <input type="text" value={direccion} onChange={cambiarDireccion} />
            </label>

            <label>
                Email: <input type="text" value={email} OnChange={cambiarEmail} />
            </label>
            <button type="submit">Enviaar</button>
        </form>
    )
}

export default EjemploFormulario