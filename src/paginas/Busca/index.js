
import React from 'react'
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';

export default function index() {
  return (
     
    <div className={styles.fundoPag}>
          
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