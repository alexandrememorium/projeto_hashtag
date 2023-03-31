
import React, { useEffect, useState } from 'react'
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';



export default function Index() { 
  const [campos, setCampos] = useState([])
  
  useEffect(() => {

    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)")
      .then(res => res.json())
      .then(res => setCampos(res.records.map((record) => {
        return {
          hashtag: record.fields.Hashtag,
          data: new Date(record.fields.Data)
        }
      })));

  }, [])       
   
  return (
     
    <div className={styles.fundoPag}>

      <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25} />

      <div className={styles.Apptop}>

      </div >
      <div className={styles.buscas_realizadas}>
        Buscas realizadas
      </div>
    <div className={styles.caixa}>
      <div className={styles.cabecalho}>        
        <div className={styles.hashtag_cabecalho}>Hashtag</div>
        <div className={styles.data_cabecalho}>Data</div>
        <div className={styles.hora_cabecalho}>Hora</div>       
      </div>

        <div className={styles.container_externo_hashtag}>
          {campos.slice(0, 10).map((campo, index) => {
            return (
              
              
              <div className={styles.container_hashtag} key={index}>
               
               <div className={styles.linhas_container_hashtag}>
                

                <div className={styles.hashtag}>
                  {campo.hashtag}
                </div>

                <div className={styles.data}>
                {`${campo.data.toLocaleString('pt-BR',{
                    month: '2-digit',
                    day: '2-digit' 
                  })}`}
                </div>

                <div className={styles.hora}>
                  {`${campo.data.toLocaleString('pt-BR',{
                    hour: '2-digit',
                    minute: '2-digit'
                  })}`}
                </div>
                </div>
              </div>
              
            )
          })}
        </div>
        <div className={styles.mostra_busca}>

        </div>
      </div>

    </div>

    
  );
}