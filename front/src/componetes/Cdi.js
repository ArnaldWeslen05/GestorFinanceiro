
import { IoCloseCircle } from "react-icons/io5";
import './Cdi.css';

const Cdi = ({onClose}) =>{
   return(
    <div>
        <div className="container-investimentos">
        <button className="close" onClick={onClose}><IoCloseCircle /></button>
           <div className="caixa-investimentos">
                <div className="caixa-cdi">
                    <input type="checkbox" name="BancoCdi" id=""/>
                    <p>Nubank</p>
                </div>
                  
                <div className="caixa-cdi">
                   <input type="checkbox" name="BancoCdi" id="" />
                   <p>PicPay</p>
                </div>

                <div className="caixa-cdi">
                    <input type="checkbox" name="BancoCdi" id="" />
                    <p>Inter</p>
                </div>
                <div className="caixa-cdi">
                  <input type="checkbox" name="BancoCdi" id="" />
                  <p>Bradesco</p>
                </div>

                <div className="resultado-cdi">
                     <h1 className="tt"> Valor: </h1>
                     <input type="number" name="" id="" />
                    <h1 className="tt">Meses: </h1>
                    <input type="number" name="" id="" />
                    <button className="calcular"> calcular </button>
                </div>
                <h1 className="res">Resultado </h1>
           </div>
        </div>
    </div>
   )
}

export default Cdi