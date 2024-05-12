import { useState } from 'react';
import './Login.css';
import Cadastro from './Cadastro';

const Login = () => {
   const [mostrarCadastro, setCadastro] = useState(false);
  

   
   const toggleCadastro = () => {
     setCadastro(!mostrarCadastro);
   };

   return (
     <div className="container">
       {!mostrarCadastro && (
         <form className="form">
           <h2>Login</h2>
           <input type="email" placeholder="Email" />
           <input type="password" placeholder="Senha" />
           <button type="submit">Entrar</button>
           <p onClick={toggleCadastro}>Cadastrar</p>
         </form>
       )}

       {mostrarCadastro && <Cadastro />}
     </div>
   );
};

export default Login;
