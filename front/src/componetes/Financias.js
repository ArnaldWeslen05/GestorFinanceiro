import { useState } from 'react';
import './financias.css';
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";

const Financias = ({ onCloseFinancias }) => {
    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');
    const [transacao, setTransacao] = useState([]);

    const handleSave = async () => {
        if(entrada === ''){
            setEntrada(0)
        }
        if(saida === ''){
            setSaida(0)
        }
        const total = entrada - saida
        try {
            const response = await axios.post('http://localhost:5002/financias', { entrada, saida });
            if (response.data.success) {
                setTransacao([...transacao, { entrada, saida, total}]);
                setEntrada('');
                setSaida('');
            } else {
                alert('Erro ao salvar');
            }
        } catch (error) {
            console.error('Erro ao salvar as finanças', error);
            alert('Error em nosso servidor. Você foi desconectado');
            window.location.reload()
        }
    };

    

    return (
        <div>
            <div className="container-financias">
                <div className="box-financias">
                <button className="close" onClick={onCloseFinancias}><IoCloseCircle /></button>

                    <div className="caixa-financias">
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
