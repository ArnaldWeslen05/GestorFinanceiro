import React, { useState } from 'react';
import { FaBitcoin } from "react-icons/fa";
import { FaChartLine, FaNewspaper } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import Cdi from "./Cdi";
import Criptomoeda from './CriptoMoeda';
import Informações from './Informacoes';
import './funcoes.css';

const Funcoes = () => {
  const [mostrarCDI, setMostrarCDI] = useState(false);
  const[mostrarCripto, setCripto] = useState(false);
  const [ mostrarInformaçoes, setInformacoes] = useState(false)

  // Função para abrir o componente CDI
  function abrirCDI() {
    setMostrarCDI(!mostrarCDI);
    setCripto(false)
    setInformacoes(false)
  }
   // Função para abrir o componente CriptoMoeda
   function abrirCripto(){
    setCripto(!mostrarCripto)
    setMostrarCDI(false)
    setInformacoes(false)
   }
   //funçaõ para abrir o componente Noticias
   function abrirInformaçoes(){
    setInformacoes(!mostrarInformaçoes)
    setCripto(false)
    setMostrarCDI(false)

   }
 

  return (
    <div>
      <div className="caixa-footer">
        {/* Box para CDI*/}
        <div className="box-footer" onClick={abrirCDI} id='Inv'>
          <p>Rendimento CDI</p>
          <p> <FaChartLine/> </p>
        </div>

        {/* Box para CriptoMoeda */}
        <div className="box-footer" onClick={abrirCripto}>
          <p>Cripto Moeda</p>
          <p><FaBitcoin/></p>
        </div>

        {/* Box para definir sua meta*/}
        <div className="box-footer" >
          <p>Defina Sua Meta</p>
          <p><GoGoal/></p>
          
        </div>
        {/* Box Para defeinir sua Meta */}
        <div className="box-footer" onClick={abrirInformaçoes}>
          <p>Informações Grupo</p>
          <p><FaNewspaper/></p>
        </div>
      </div>
      {/* Renderiza o componente Investimentos se mostrarInvestimentos for true */}
      {mostrarCDI && <Cdi onClose={abrirCDI} />}
      {mostrarCripto && <Criptomoeda onCloseMoeda={abrirCripto} />}
      {mostrarInformaçoes && <Informações onCloseInformacoes={abrirInformaçoes}/>}
      </div>
  );
}

export default Funcoes;
