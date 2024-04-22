
import { IoCloseCircle } from "react-icons/io5";
import './investimentos.css';

const Cdi = ({onClose}) =>{
   return(
    <div>
        <div className="container-investimentos">
        <button className="close" onClick={onClose}><IoCloseCircle /></button>
           <div className="caixa-investimentos">
            <div className="box-investimentos">
                <p>Rendimentos CDI </p> 
            
            </div>

            <div className="box-investimentos">
                <p>Criptos Moedas</p>
            </div>

            <div className="box-investimentos">
                <p>Fundos Imobíliario</p>
            </div>

            <div className="box-investimentos">
                <p>Outros Investimentos</p>
            </div>
           </div>
        </div>
    </div>
   )
}

export default Cdi