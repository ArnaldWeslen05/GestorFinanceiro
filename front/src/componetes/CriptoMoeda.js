import { IoCloseCircle } from "react-icons/io5";
import './criptomoeda.css';

const Criptomoeda = ({ onCloseMoeda }) => {
    function calcular() {
        const res = document.getElementById('res');
        const valor = document.getElementById('valor').value;
        const moedas = document.getElementsByName('Moeda');
        let moedaSelecionada = false;
    
       
        for (let i = 0; i < moedas.length; i++) {
            if (moedas[i].checked) {
                moedaSelecionada = true;
                break;
            }
        }

        if (valor.length === 0 || !moedaSelecionada) {
            res.innerText = 'Por favor, insira um valor e selecione uma moeda.';
        } else {
            let btc;
            let eth;
            let ltc;
            let xrp;
    
            if (moedas[0].checked) {
                btc = Number(valor) /  360500.49;
                res.innerText = `com R$${valor} você terá: ${btc.toFixed(5)} BTC`;
            } else if (moedas[1].checked) {
                eth = Number(valor) / 20082.17;
                res.innerText = `com R$${valor} você terá: ${eth.toFixed(5)} ETH`;
            } else if (moedas[2].checked) {
                ltc = Number(valor) / 441.90;
                res.innerText = `com R$${valor} você terá: ${ltc.toFixed(5)} LTC`;
            } else if (moedas[3].checked) {
                xrp = Number(valor) / 2.73;
                res.innerText = `com R$${valor} você terá: ${xrp.toFixed(5)} XRP`;
            }
        }
    }
    return (
        <div>
            <div className="container-moeda">
                <button className="close" onClick={onCloseMoeda}><IoCloseCircle /> </button>
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
                        <h1 className="tt">Qual Valor Deseja: </h1>
                        <input type="number" name="" id="valor"  />
                        <button className="calcular" onClick={calcular}> Calcular </button>
                    </div>
                    <h1 className="res" id="res">Resultado </h1>
                </div>
            </div>
        </div>
    )
}

export default Criptomoeda;
