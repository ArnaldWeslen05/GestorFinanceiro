import React from "react";
import Cabecario from "./Cabecario";
import Chat from "./Chat";
import Investimentos from "./Investimentos";
import './style.css';

const App = () =>{
    return(
        <div> 

            <header>
                <Cabecario/>
            </header>
            
            <div>
            <Investimentos/>
                <Chat/>
            </div>
           
        </div>

    )
}

export default App;