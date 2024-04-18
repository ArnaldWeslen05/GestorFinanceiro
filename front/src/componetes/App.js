import React from "react";
import Cabecario from "./Cabecario";
import Chat from "./Chat";
import './style.css'

const App = () =>{
    return(
        <div> 

            <header>
                <Cabecario/>
            </header>
            
            <div>
                <Chat/>
            </div>
           
        </div>

    )
}

export default App;