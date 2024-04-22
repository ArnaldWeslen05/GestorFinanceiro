import React from "react";
import Cabecario from "./Cabecario";
import Chat from "./Chat";
import Footer from "./Footer";
import './style.css';

const App = () =>{
    return(
        <div> 

            <header>
                <Cabecario/>
            </header>
            
            <div>
                <Chat/>
            </div>
           
           <footer>
                <Footer/>
           </footer>
        </div>

    )
}

export default App;