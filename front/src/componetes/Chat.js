
import { IoIosSend } from "react-icons/io";
import './chat.css';

const Corpo = () =>{

  
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
                            <button><IoIosSend /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Corpo;
