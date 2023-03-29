import React from 'react'
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';





export default function index() {
  
  //const url ="https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)"

  //function getUser(){
    //fetch(`${url}/10`)
     //.then(response => response.json())
     //.then(response =>{
       //  userName.textContent = data.name
        // userData.textContent = data.data
        // userHora.textContent = data.hora
      //})
     // .catch(error => console.error(error))
     

  //}
  //getUser()
  
  
  
  
  
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