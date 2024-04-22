import React, { useState } from 'react';
import { FaChartLine, FaNewspaper } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import Investimentos from "./Investimentos";
import './footer.css';

const Footer = () => {
  const [mostrarInvestimentos, setMostrarInvestimentos] = useState(false);

  // Função para abrir o componente Investimentos
  function abrirInvestimentos() {
    setMostrarInvestimentos(!mostrarInvestimentos);
  }

  return (
    <div>
      <div className="caixa-footer">
        {/* Box para Investimentos */}
        <div className="box-footer" onClick={abrirInvestimentos}>
          <p>Investimentos</p>
          <p> <FaChartLine/> </p>
        </div>

        {/* Box para Educação Financeira */}
        <div className="box-footer">
          <p>Educação Financeira</p>
          <p><MdCastForEducation /></p>
        </div>

        {/* Box para Notícias */}
        <div className="box-footer">
          <p>Notícias</p>
          <p><FaNewspaper/></p>
        </div>
      </div>

      {/* Renderiza o componente Investimentos se mostrarInvestimentos for true */}
      {mostrarInvestimentos && <Investimentos onClose={abrirInvestimentos} />}
    </div>
  );
}

export default Footer;
