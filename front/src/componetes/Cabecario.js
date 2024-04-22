import React, { useState } from "react";
import Footer from "./Footer";
import Investimentos from "./Investimentos";

const Cabecario = () =>{
  const [mostrarInvestimentos, setMostrarInvestimentos] = useState(false); 

  //abrir o Menu

  function abrirMenu(){
    const menu = document.getElementById('menu')
    if(menu.style.display === 'none'){
        menu.style.display = 'block'
    }else{
      menu.style.display = 'none'
    
    }
  }
  //Abbre O Componete Investimentos
  function AbrirInvestimentos(){
    setMostrarInvestimentos(!mostrarInvestimentos)
  
  }

    return(
        <div>
             <div className="cabeçario">
               <h1>Gestor Financeiro</h1>
             </div>
             <div className="btn-menu"  onClick={abrirMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
              </div>
              
              <div id="menu" className="menu">
                 <p onClick={AbrirInvestimentos}>Investimentos</p>
                 <p>Educação Financeira</p>
                 <p>Defina Sua Meta</p>
                 <p>Notícias</p>
              </div>

              {/* Controla O componente Investimentos , e compara se deve ser mostardo ou não */}
              {mostrarInvestimentos && <Investimentos onClose={AbrirInvestimentos}/>}
              
              <footer>
                <Footer/>
           </footer>
        </div> 
    )
}
export default Cabecario;