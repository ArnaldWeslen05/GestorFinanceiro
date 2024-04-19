import { FaBitcoin } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import './investimentos.css';

const Investimentos = () =>{
   return(
    <div>
        <div className="container-investimentos">
           <div className="caixa-investimentos">
            
            <div className="box-investimentos">
                <p>Rendimentos CDI </p> 
                <p><FaChartLine /></p> 
            </div>

            <div className="box-investimentos">
                <p>Criptos Moedas</p>
                <p><FaBitcoin /></p>
            </div>

            <div className="box-investimentos">
                <p>Outros Investimentos</p>
            </div>

            <div className="box-investimentos">
                <p>Outros Investimentos</p>
            </div>
           </div>
        </div>
    </div>
   )
}

export default Investimentos