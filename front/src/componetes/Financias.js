import { useState } from 'react';
import './financias.css';
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";

const Financias = ({onCloseFinancias}) =>{
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    

    const handleSave = async () =>{
        try{
           const response = await axios.post('http://localhost:5002/financias', {entrada, saida});
           if(response.data.success){
            alert('dados Atualizados com sucesso!')
           }else{
            alert('Erro ao salvar')
           }
        }catch(error){
            console.error('erro ao salvar as financias', error);
            alert('Erro ao Atualizar so dados. Erro de servidor. Tente mais tarde')
        }
    }
    return(
        <div>
            <div className="container-financias">
                <button className="close" onClick={onCloseFinancias}><IoCloseCircle /> </button>
                <div className="box-financias">
                    <div className="caixa-financias">
                       <label htmlFor="entrada">Entradas:</label>
                        <input type="number" value={entrada} onChange={(e) => setEntrada(+e.target.value)}/>
                        <label htmlFor="entrada" >Saidas:</label>
                        <input type="number" value={saida} onChange={(e) => setSaida(+e.target.value)}/>
                        {/* <label htmlFor="entrada">Saldo:</label>
                        <input type="number" readOnly/> */}
                        <button className='save-financias' onClick={handleSave}>Salvar</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Financias
