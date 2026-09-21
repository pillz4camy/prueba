import { useState } from "react";
import { supabase } from "../services/supabase";
function Registro(){
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mensaje, setMensaje] = useState('')
    const registrarUsuario = async (e) => {
        e.preventDefault()
        const {data , error} = await supabase.auth.signUp({
        email,
        password,
        options : {
            data: {
                nombre,
                rol: "cliente"
            }
        }    
        })
if (error){
    setMensaje(error.message)
    return
}
console.log('usuario registrado: ' .data)
setMensaje(' Usuario registrado correctamente')
 
    }
return(
    <div>
        <h2>Crear cuenta</h2>
        <form onSubmit={registrarUsuario} action="">
            <input type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
 
            <input type="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
 
            <input type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           
            <button type="submit">
                Registrarse
            </button>
{mensaje &&  <p>{mensaje}</p>}
 
        </form>
    </div>
)
}
 
export default Registro
 