
import { IoIosSend } from "react-icons/io";
import './chat.css';
import axios from 'axios';

const Corpo = () =>{
  function enviar(){
    const valor = document.getElementById('pergunta').value
    axios.post('http://localhost:4000/pergunte-ao-chatgpt', {prompt: valor})
    .then(response => {
        console.log(response);
        document.getElementById("caixa").value = response.data.completion;
    }).catch(erro => {
        console.log(erro);
    })
  }
    return(
        <div>
            <section>
                <div className="corpo">
                    <div className="caixa">
                
                        <div className="pergunta">
                            <input 
                               type="text" 
                                id="pergunta" 
                                placeholder="Pergunte ao gestor..."
                                 required  />
                            <button onClick={enviar}><IoIosSend /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Corpo;
