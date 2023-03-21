
import React from 'react'
import styles from './busca.module.css'
//import Menu from '../../componentes/Menu';

export default function  index () {
  return (
    
    

    <div className="containerprincipal">
        
         
      <div className="Apptop">

        
          <div className="Texto1">
            hashtag
          </div>

          <div className='Texto2'>
            finder
          </div>
          <div>
        
          </div>

          
          
          
          <div >   
            <button className="botaohome"
                type="submit"
              >  
              HOME 
            </button>
          </div>

          <div>  
            <button className="botaosair"
                type="submit"
              >  
              SAIR 
            </button>
          </div> 
                
      </div>
      
      
      <div className="buscas_realizadas">
        Buscas realizadas
      </div>
      
      <div className='caixa_busca'>
      
      <div className='container_hashtag'> 
        
        
        
        <div className='hashtag'>
          Hashtag
        </div>

        <div className='data'>
          Data
        </div>

        <div className='hora'>
          Hora
        </div>
      </div> 
      </div>
      <div className='mostra_busca'>
          

      </div>
    </div> 
  );
}