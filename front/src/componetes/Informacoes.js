import './informacoes.css'
import { IoCloseCircle } from 'react-icons/io5';



const Notícias =({onCloseInformacoes}) =>{
    return(
        <div>
           <div className="container">
           <button className="close" onClick={onCloseInformacoes}><IoCloseCircle /> </button>
             <div className="caixa-informacoes">
                <div className="box-informacoes">
                     <h3>João Carlos Cordeiro Cíceri</h3>
                     <p>RA: 823127748</p>
                </div>
                <div className="box-informacoes">
                     <h3>Vinycius soares martinelli</h3>
                     <p>RA: 823160582</p>
                </div>
                <div className="box-informacoes">
                     <h3>Arnald Weslen Rocha Matos</h3>
                     <p>RA: 823159883</p>
                </div>
                <div className="box-informacoes">
                     <h3>Guilherme Soares De Jesus</h3>
                     <p>RA: 823159883</p>
                </div>
                <div className="box-informacoes">
                     <h3>Pedro Chiconelli Gomes de Victor</h3>
                     <p>RA: 823136041</p>
                </div>
                
             </div>
           </div>
        </div>
    )
}

export default Notícias;