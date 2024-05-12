
import { IoIosSend } from "react-icons/io";
import './chat.css';
import axios from 'axios';
import { useState } from "react";

const Corpo = () => {
    const [pergunta, setPergunta] = useState('')
    const [resposta, setResposta] = useState('')

    const handlePerguntaChange = (e) => {
        setPergunta(e.target.value)
    }

    const enviar = () => {
        axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: pergunta })
            .then(response => {
                console.log(response);
                setResposta(response.data.completion);

                axios.post('http://localhost:5000/dados', { pergunta: pergunta, resposta: response.data.completion })
                    .then(response => {
                        console.log('dados enviados com sucesso: ', response);
                    })
                    .catch(error => {
                        console.error('Error ao enviar dados para /dados: ', error);
                    })
            }).catch(erro => {
                console.log(erro);
            })
    }
    return (
        <div>
            <section>
                <div className="corpo">

                    <div className="resposta">
                        <textarea
                            value={resposta}
                            placeholder="Resposta do gestor..."
                             readOnly
                    
                        />
                    </div>
                    <div className="pergunta">
                        <input
                            
                            value={pergunta}
                            onChange={handlePerguntaChange}
                            type="text"
                            id="pergunta"
                            placeholder="Pergunte ao gestor..."
                            required />
                        <button onClick={enviar}><IoIosSend /></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Corpo;
