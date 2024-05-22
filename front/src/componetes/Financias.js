import './financias.css';
import { IoCloseCircle } from "react-icons/io5";

const Financias = ({onCloseFinancias}) =>{
    return(
        <div>
            <div className="container-financias">
                <button className="close" onClick={onCloseFinancias}><IoCloseCircle /> </button>
                <div className="box-financias">
                    <div className="caixa-financias">
                       <label htmlFor="entrada">Entradas:</label>
                        <input type="number"/>
                        <label htmlFor="entrada">Saidas:</label>
                        <input type="number"/>
                        <label htmlFor="entrada">Saldo:</label>
                        <input type="number" readOnly/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Financias
