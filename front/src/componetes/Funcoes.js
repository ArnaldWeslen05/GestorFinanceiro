import React, { useState } from 'react';
import { FaChartLine, FaNewspaper } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Cdi from "./Cdi";
import './funcoes.css';

const Funcoes = () => {
  const [mostrarCDI, setMostrarCDI] = useState(false);

  // Função para abrir o componente Investimentos
  function abrirCDI() {
    setMostrarCDI(!mostrarCDI);
  }

  return (
    <div>
      <div className="caixa-footer">
        {/* Box para Investimentos */}
        <div className="box-footer" onClick={abrirCDI} id='Inv'>
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
      {mostrarCDI && <Cdi onClose={abrirCDI} />}
    </div>
  );
}

export default Funcoes;
