import React, { useState } from 'react';
import { FaChartLine, FaNewspaper } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Cdi from "./Cdi";
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
        <div className="box-footer" onClick={abrirInvestimentos} id='Inv'>
          <p>Rendimento CDI</p>
          <p> <FaChartLine/> </p>
        </div>

        {/* Box para Educação Financeira */}
        <div className="box-footer">
          <p>Criptomoeda</p>
          <p><FaBitcoin/></p>
        </div>

        {/* Box para Notícias */}
        <div className="box-footer">
          <p>Defina Sua Meta</p>
          <p><GoGoal/></p>
          
        </div>
        {/* Box Para defeinir sua Meta */}
        <div className="box-footer">
          <p>Notícias</p>
          <p><FaNewspaper/></p>
        </div>

      </div>

      {/* Renderiza o componente Investimentos se mostrarInvestimentos for true */}
      {mostrarInvestimentos && <Cdi onClose={abrirInvestimentos} />}
    </div>
  );
}

export default Footer;
