//import logo from './logo.svg';
import './App.css';
import Menu from '../../componentes/Menu/';

export default function  App() {
  return (
    <div>
     
     <div> 
        <Menu/>
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


