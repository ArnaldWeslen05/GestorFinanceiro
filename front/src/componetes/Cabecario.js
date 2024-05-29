import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Cdi from "./Cdi";
import Criptomoeda from "./CriptoMoeda";
import Notícias from "./Informacoes";
import Financias from "./Financias";

const Cabecario = () => {
  const [mostrarCDI, setCDI] = useState(false);
  const [mostrarCripto, setCripto] = useState(false);
  const [mostrarInformacoes, setInformacoes] = useState(false);
  const [mostrarFinancias, setFinancias] = useState(false);

  // Abrir o Menu
  function abrirMenu() {
    const menu = document.getElementById("menu");
    const btnMenu = document.getElementById("btn-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
      btnMenu.style.display = "none";
    } else {
      menu.style.display = "none";
    }
  }

  function fecharMenu() {
    const menu = document.getElementById("menu");
    const btnMenu = document.getElementById("btn-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      btnMenu.style.display = "flex";
    }
  }

  // Controla a visibilidade do menu quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      const menu = document.getElementById("menu");
      const btnMenu = document.getElementById("btn-menu");
      if (window.innerWidth > 850) {
        menu.style.display = "none";
        btnMenu.style.display = "none";
      } else {
        btnMenu.style.display = "flex";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Abre o Componente Investimentos
  function AbrirInvestimentos() {
    setCDI(!mostrarCDI);
    setCripto(false);
    setInformacoes(false);
    setFinancias(false);
  }

  function abrirCripto() {
    setCripto(!mostrarCripto);
    setCDI(false);
    setInformacoes(false);
    setFinancias(false);
  }

  function abrirInformacoes() {
    setInformacoes(!mostrarInformacoes);
    setCDI(false);
    setCripto(false);
    setFinancias(false);
  }

  function abrirFinancias() {
    setFinancias(!mostrarFinancias);
    setCDI(false);
    setCripto(false);
    setInformacoes(false);
  }

  return (
    <div>
      <div className="cabeçario">
        <h1>Gestor Financeiro</h1>
      </div>
      <div className="btn-menu" id="btn-menu" onClick={abrirMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <div id="menu" className="menu">
        <button className="close-menu" onClick={fecharMenu}>
          <IoCloseCircle />
        </button>
        <p onClick={AbrirInvestimentos}>Rendimento CDI</p>
        <p onClick={abrirCripto}>Criptomoeda</p>
        <p onClick={abrirFinancias}>Financias</p>
        <p onClick={abrirInformacoes}>Informações</p>
      </div>

      {/* Controla os componentes e compara se deve ser mostrado ou não */}
      {mostrarCDI && <Cdi onClose={AbrirInvestimentos} />}
      {mostrarCripto && <Criptomoeda onCloseMoeda={abrirCripto} />}
      {mostrarFinancias && <Financias onCloseFinancias={abrirFinancias} />}
      {mostrarInformacoes && <Notícias onCloseInformacoes={abrirInformacoes} />}
    </div>
  );
};

export default Cabecario;
