import { IoCloseCircle } from "react-icons/io5";
import "./Cdi.css";
import { useState } from "react";

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
            setErro("Porfavor, inserir um Valor em Meses");
            setResultado("");
            return;
        }

        if (!bancoSelecionado) {
            setErro("Por favor, selecione um banco.");
            setResultado("");
            return;
        }

        let taxa;
        switch (bancoSelecionado) {
            case "Nubank":
                taxa = 1.01; // 101%
                break;
            case "PicPay":
                taxa = 1.02; // 102%
                break;
            case "Inter":
                taxa = 1.03; // 103%
                break;
            case "Bradesco":
                taxa = 1.04; // 104%
                break;
            default:
                taxa = 1; // Caso nenhum banco seja selecionado, a taxa é 100%
        }

        const valorNumerico = parseFloat(valor);
        const mesesNumerico = parseFloat(meses);
        const resultadoCalculado = valorNumerico * taxa ** mesesNumerico;
        setResultado(resultadoCalculado.toFixed(2)); // Limita o resultado a 2 casas decimais
        setErro(""); // Limpa a mensagem de erro
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
                            {" "}
                            calcular{" "}
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
