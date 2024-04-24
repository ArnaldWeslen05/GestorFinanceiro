import React from "react";
import Cabecario from "./Cabecario";
import Chat from "./Chat";
import Funcoes from "./Funcoes";
import './style.css';

const App = () =>{
    return(
        <div> 

            <header>
                <Cabecario/>
            </header>
            <section>
              <Funcoes/>
            </section>
            <div>
                <Chat/>
            </div>
           
          
        </div>

    )
}

export default App;