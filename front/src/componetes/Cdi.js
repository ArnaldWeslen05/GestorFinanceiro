import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./Cdi.css";

const Cdi = ({ onClose }) => {
    const [bancoSelecionado, setBancoSelecionado] = useState("");
    const [valor, setValor] = useState("");
    const [meses, setMeses] = useState("");
    const [resultado, setResultado] = useState("");
    const [erro, setErro] = useState("");

    const calcularCDI = () => {
        if (!valor) {
            setErro("Por favor, insira um valor.");
            setResultado("");
            return;
        }
        if (!meses) {
            setErro("Por favor, insira um valor em meses.");
            setResultado("");
            return;
        }

        if (!bancoSelecionado) {
            setErro("Por favor, selecione um banco.");
            setResultado("");
            return;
        }

        let percentualCDI;
        switch (bancoSelecionado) {
            case "Nubank":
                percentualCDI = 1.00; // 100% do CDI
                break;
            case "PicPay":
                percentualCDI = 1.02; // 102% do CDI
                break;
            case "Inter":
                percentualCDI = 0.98; // 98% do CDI
                break;
            case "Bradesco":
                percentualCDI = 1.02; // 102% do CDI
                break;
            default:
                percentualCDI = 1.00; // Caso nenhum banco seja selecionado, a taxa é 100% do CDI
        }

        const valorNumerico = parseFloat(valor);
        const mesesNumerico = parseFloat(meses);
        const dias = mesesNumerico * 30; // Convertendo meses para dias

        const cdiAnual = 0.12316; // 12,316% ao ano
        const cdiDiario = Math.pow(1 + cdiAnual, 1 / 252) - 1; // 252 dias úteis no ano
        const rendimentoDiario = Math.pow(1 + cdiDiario, percentualCDI) - 1;

        const resultadoCalculado = valorNumerico * Math.pow(1 + rendimentoDiario, dias);

        setResultado(resultadoCalculado.toFixed(2)); 
        setErro(""); 
    };

    return (
        <div>
            <div className="container-investimentos">
                <button className="close" onClick={onClose}>
                    <IoCloseCircle />
                </button>
                <div className="caixa-investimentos">
                    <div className="caixa-cdi">
                        <input
                            type="radio"
                            name="BancoCdi"
                            value="Nubank"
                            onChange={(e) => setBancoSelecionado(e.target.value)}
                        />
                        <p>Nubank</p>
                    </div>

                    <div className="caixa-cdi">
                        <input
                            type="radio"
                            name="BancoCdi"
                            value="PicPay"
                            onChange={(e) => setBancoSelecionado(e.target.value)}
                        />
                        <p>PicPay</p>
                    </div>

                    <div className="caixa-cdi">
                        <input
                            type="radio"
                            name="BancoCdi"
                            value="Inter"
                            onChange={(e) => setBancoSelecionado(e.target.value)}
                        />
                        <p>Inter</p>
                    </div>
                    <div className="caixa-cdi">
                        <input
                            type="radio"
                            name="BancoCdi"
                            value="Bradesco"
                            onChange={(e) => setBancoSelecionado(e.target.value)}
                        />
                        <p>Bradesco</p>
                    </div>

                    <div className="resultado-cdi">
                        <h1 className="tt"> Valor: </h1>
                        <input
                            type="number"
                            name="valor"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                        />
                        <h1 className="tt">Meses: </h1>
                        <input
                            type="number"
                            name="meses"
                            value={meses}
                            onChange={(e) => setMeses(e.target.value)}
                        />
                        <button className="calcular" onClick={calcularCDI}>
                            calcular
                        </button>
                    </div>
                    {erro && <h1 className="res">{erro}</h1>}
                    {!erro && resultado && (
                        <h1 className="res">Resultado: {resultado}</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cdi;
