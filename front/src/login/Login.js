import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Cadastro from './Cadastro';

const Login = ({ onLogin }) => {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [cadastrar, setCadastrar] = useState(false);

   const handleLogin = async () => {
      try {
         const response = await axios.post('http://localhost:5002/buscar', { email, senha });
         if (response.data.authenticated) {
            alert('Logado com sucesso!');
            onLogin();
         } else {
            alert('Email ou senha incorretos.');
         }
      } catch (error) {
         console.error('Erro ao fazer login:', error);
         alert('Erro ao fazer login. Tente novamente mais tarde.');
      }
   }

   const toggleCadastrar = () => {
      setCadastrar(!cadastrar);
   }

   return (
      <div className="container">
         {!cadastrar && (
            <form className="form">
               <h2>Login</h2>
               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
               <button type="button" onClick={handleLogin}>Entrar</button>
               <p onClick={toggleCadastrar}>Cadastrar</p>
            </form>
         )}
         {cadastrar && <Cadastro />}
      </div>
   );
};

export default Login;
