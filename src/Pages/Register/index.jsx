import React from 'react';
import {Link} from 'react-router-dom';
import crop from '../../Assets/crop.svg'
import topo from '../../Assets/topo.svg'

import './style.css';


export default function Register(){ 
   


    return (
        <div className='register-container' > 
               <header className='header'> 
                     <div className='topo-crop'>
                        <img src={crop} alt='crop'/> 
                        <h1>  Cadastre-se  </h1>
                     </div>
                     <div className='topo-casa'>
                        <img src={topo} alt='topo'/>
                     </div>   
               </header>
                     
                <form >
                    
                    <input 
                       placeholder='Nome'
                     
                    /> 
                    <input 
                       placeholder='Sobrenome'
                      
                    />
                    <input
                       type='email' 
                       placeholder='E-mail'
                     
                    />
                    <input                      
                       placeholder='Telefone'
                  
                    />
                    <input
                        
                       placeholder='Senha'
                      
                    />
                     <input
                        
                        placeholder='Confirme a senha'
                      
                     />

                     <input type="checkbox" id="termos" Name="termos"/>
                     <label for="termos">Declaro que li e estou de acordo com os <Link>termos e condições</Link></label>
                     <button className='button' type="submit"> Concluir cadastro </button> 
                 </form>                
          </div>
    ) 

}