import React, { useState } from "react";
import Cdi from "./Cdi";
import Criptomoeda from "./CriptoMoeda";
import { IoCloseCircle } from "react-icons/io5";


const Cabecario = () =>{
  const [mostrarCDI, setMostrarCDI] = useState(false); 
const [mostrarCripto, setCripto ]= useState(false)
  //abrir o Menu

  function abrirMenu(){
    const menu = document.getElementById('menu')
    const btnMenu = document.getElementById('btn-menu')
    if(menu.style.display === 'none'){
        menu.style.display = 'block'
        btnMenu.style.display = 'none'
    }else {
      menu.style.display = 'none'
    
    }
  }
  function fecharMenu(){
    const menu = document.getElementById('menu')
    const btnMenu = document.getElementById('btn-menu')
    if(menu.style.display === 'block'){
      menu.style.display = 'none'
      btnMenu.style.display = 'flex'
    }
  }
  //Abbre O Componete Investimentos
  function AbrirInvestimentos(){
    setMostrarCDI(!mostrarCDI)
    setCripto(false)
  }
  function abrirCripto (){
    setCripto(!mostrarCripto)
    setMostrarCDI(false)
  }

    return(
        <div>
             <div className="cabeçario">
               <h1>Gestor Financeiro</h1>
             </div>
             <div className="btn-menu" id="btn-menu"  onClick={abrirMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
              </div>
              
              <div id="menu" className="menu">
                <button className="close-menu" onClick={fecharMenu}> <IoCloseCircle/> </button>
                 <p onClick={AbrirInvestimentos}>Rendimento CDI</p>
                 <p onClick={abrirCripto}>Criptomoeda</p>
                 <p>Defina Sua Meta</p>
               
              </div>
                
              {/* Controla O componente Investimentos , e compara se deve ser mostardo ou não */}
              {mostrarCDI &&< Cdi onClose={AbrirInvestimentos}/>}
              {mostrarCripto && <Criptomoeda onCloseMoeda={abrirCripto}/>}
             
        </div> 
    )
}
export default Cabecario;