import React from 'react'
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';





export default function Index() {
  
  
 
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)")
     .then(response => response.json())
     .then(res => res.records)
     .catch(error => console.error(error))
     
    
    const records = []; 

    
    {

      
      <header className="container_mostra_busca">
        
        {records;slice(0, 10).map((record)  => {})
       
          return (
        
            <div>
              <div id='Hashtagname'>
                <p id="Hashtagnamem" key=record.id />
              </div>
                
        
              <div className="Createdtime">
                <p className="time">
                  <b></b> records.fields.Data
                </p>

              </div>
                 

              <div className="Fields">
                <p className="nome">
                  <b></b> {fields.name}
                </p>

              </div>
            </div>
            
          )

        })}

      </header>
    }
  
  
  
  
  return (
     
    <div className={styles.fundoPag}>
          
      <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25}/>
      
      <div className={styles.Apptop}>
        
      </div >
      <div >

      <div className={styles.buscas_realizadas}>
        Buscas realizadas
      </div>

        <div className={styles.container_externo_hashtag}>

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

      
      <div className={styles.mostra_busca}>
      </div>
      </div>
      </div>

    </div>
  );
}