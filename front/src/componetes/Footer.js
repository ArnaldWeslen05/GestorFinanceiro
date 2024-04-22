import { FaChartLine } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import './footer.css';

const Footer =()=>{
  return(
    <div>
        <div className="caixa-footer">

            <div className="box-footer">
                 <p>Investimentos</p> 
                 <p> <FaChartLine/> </p>
            </div>

            <div className="box-footer">
                <p>Educação Financeira</p>
                <p><MdCastForEducation /></p>
            </div>

            <div className="box-footer">
                <p>Notícias</p>
                <p><FaNewspaper/></p>
            </div>

        </div>
    </div>
  )
}

export default Footer;