
import React, { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';
import Login from './Login';

const Cadastro = () => {
    const [mostarLogin, setLogin] = useState(false)
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(''); 

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/cadastro', { nome, email, senha });
            alert('Cadastro realizado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:',error.response.data.error);
            setError(error.response.data.error);
        }
    };
    
    const toogleLogin = () => {
        setLogin(!mostarLogin)
    }
    
    return (
        <div className="container">
            {!mostarLogin && (
            <form className="form" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                {error && <p className='error'>{error}</p>}
                <input  type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} required />
                <input  type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <input  type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange} required />
                <button type="submit">Cadastrar</button>
                <p onClick={toogleLogin}>Login</p>
            </form>
            )}
            {mostarLogin && <Login/>}
        </div>
    );
};

export default Cadastro;
