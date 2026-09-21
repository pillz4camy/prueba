import { useState } from 'react'
import { supabase } from '../services/supabase'
 
function Login() {
    const [email, setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [mensaje , setMensaje] = useState('')
 
    const iniciarSesion = async (e) =>{
        e.preventDefault()
 
        const {data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
 
        if (error) {
            setMensaje('Correo o contraseña invalidas')
            return
        }
 
        console.log('Sesion', data.session)
        console.log('JWT', data.session.access_token)
 
        setMensaje('Inicio exitoso')
 
    }
return (
    <div>
        <h2>Inciar sesión </h2>
        <form onSubmit={iniciarSesion} action="">
           
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
                Ingesar
            </button>
{mensaje &&  <p>{mensaje}</p>}
 
        </form>
    </div>
)
 
}
 
export default Login