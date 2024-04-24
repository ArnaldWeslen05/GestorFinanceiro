import { IoCloseCircle } from "react-icons/io5";
import './criptomoeda.css';

const Criptomoeda = ({ onCloseMoeda }) => {

    function calcular() {
        const res = document.getElementById('res');
        const valor = document.getElementById('valor').value;
        
        if (valor.length === 0) {
            alert('Insira um valor');
        } else {
            const moeda = document.getElementsByName('Moeda');
            let btc;
            let eth;
            let ltc;
            let xrp;

            if (moeda[0].checked) {
                btc = Number(valor) / 20;
                res.innerText = `Resultado: ${btc} BTC`;
            } else if(moeda[1].checked) {
               eth = Number(valor) / 10;
               res.innerText = `Resultado: ${eth} ETH`
            } else if (moeda[2].checked){
                ltc = Number(valor) / 40;
                res.innerText = `Resultado: ${ltc} LTC`
               
            } else if (moeda[3].checked){
                xrp = Number(valor) / 50;
                res.innerText = `Resultado: ${xrp} XRP`
            }else{
                res.innerText = ''
            }
          
           
        
        }
    }

    return (
        <div>
            <div className="container-moeda">
                <button className="close" onClick={onCloseMoeda}><IoCloseCircle /></button>
                <div className="box-moeda">
                    <div className="caixa-moeda">
                        <input type="radio" name="Moeda" id="btc"/>
                        <label htmlFor="btc">Bitcoin(BTC)</label>
                    </div>

                    <div className="caixa-moeda">
                        <input type="radio" name="Moeda" id="eth" />
                        <label htmlFor="eth">Ethereum(ETH)</label>
                    </div>

                    <div className="caixa-moeda">
                        <input type="radio" name="Moeda" id="ltc" />
                        <label htmlFor="ltc">Litecoin(LTC)</label>
                    </div>

                    <div className="caixa-moeda">
                        <input type="radio" name="Moeda" id="xrp" />
                        <label htmlFor="xrp">Ripple(XRP)</label>
                    </div>

                    <div className="resultado-moeda">
                        <h1 className="tt"> Valor: </h1>
                        <input type="number" name="" id="valor" />
                        <button className="calcular" onClick={calcular}> Calcular </button>
                    </div>
                    <h1 className="res" id="res">Resultado </h1>
                </div>
            </div>
        </div>
    )
}

export default Criptomoeda;
