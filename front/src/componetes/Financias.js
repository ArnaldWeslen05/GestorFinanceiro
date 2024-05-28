import { useEffect, useState } from 'react';
import './financias.css';
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";

const Financias = ({ onCloseFinancias }) => {
    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');
    const [transacao, setTransacao] = useState([]);
    const [saldo, setSaldo] = useState(null);
    const [error, setError] = useState(null);
    
    const handleSave = async () => {
        if (entrada === '') {
            setEntrada(0);
        }
        if (saida === '') {
            setSaida(0);
        }
        const total = entrada - saida;
        try {
            const response = await axios.post('http://localhost:5002/financias', { entrada, saida });
            if (response.data.success) {
                setTransacao([...transacao, { entrada, saida, total }]);
                setEntrada('');
                setSaida('');
                setSaldo(prevSaldo => prevSaldo + total); // Atualizar o saldo localmente
            }
            else {
                alert('Erro ao salvar');
            }
        } catch (error) {
            alert('Erro em nosso servidor. Você foi desconectado');
        }
    };
    
    useEffect(() => {
        const fetchSaldo = async () => {
            try {
                const response = await axios.get('http://localhost:5002/saldo');
                setSaldo(response.data.saldo);
            } catch (error) {
                setError('Erro ao buscar o saldo.');
            }
        };
    
        fetchSaldo();
    }, [transacao]);
    return (
        <div>
            <div className="container-financias">
                <div className="box-financias">
                    <button className="close" onClick={onCloseFinancias}><IoCloseCircle /></button>

                    <div className="caixa-financias">
                        {error ? (
                            <p style={{color: 'red'}}>{error}</p>
                        ) : (
                            <p style={{color: 'blueviolet'}}>Saldo: {saldo !== null ? `R$${saldo}` : 'Carregando...'}</p>

                        )}
                        <label htmlFor="entrada">Entradas:</label>
                        <input type="number" value={entrada} onChange={(e) => setEntrada(+e.target.value)} />
                        <label htmlFor="saida">Saídas:</label>
                        <input type="number" value={saida} onChange={(e) => setSaida(+e.target.value)} />
                        <button className='save-financias' onClick={handleSave}>Salvar</button>
                    </div>
                    <div className="transacoes">
                        <h2>Transações Recentes</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Entrada</th>
                                    <th>Saída</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transacao.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>R${transaction.entrada}</td>
                                        <td>R${transaction.saida}</td>
                                        <td className={transaction.total >= 0 ? 'positive' : 'negative'}>R${transaction.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financias;
