
import React from 'react'
import {Redirect} from 'react-router-dom';
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';

export default function index() {

  let redirecionaBusca = false;

  if(localStorage.getItem('logado') === 'true'){
    redirecionaBusca = true;
  }
  return (
     
    <div className={styles.fundoPag}>

      { redirecionaBusca === false ? <Redirect to="/" /> : '' } 
          
      <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25}/>
      
      <div className={styles.Apptop}>
        
      </div>

      <div className={styles.buscas_realizadas}>
        Buscas realizadas
      </div>

      <div className={styles.caixa_busca}>

        <div className={styles.container_hashtag}>

          <div className={styles.hashtag}>
            Hashtag
          </div>

          <div className={styles.data}>
            Data
          </div>

          <div className={styles.hora}>
            Hora
          </div>

        </div>

      </div>
      <div className={styles.mostra_busca}>

      </div>

    </div>
  );
}