import React, { useState, useEffect } from 'react';
import styles from './busca.module.css'
import Menu from '../../componentes/Menu';

//Formatar Data
function formatDate(date) {
  let newDate = new Intl.DateTimeFormat("pt-br", {
      day: "2-digit",
      month: "2-digit",
  }).format(date);
  return newDate;
}
//Formatar Hora
function formatTime(time) {
let  newhour = new Intl.DateTimeFormat("pt-br", {
  hour: "numeric",
  minute: "numeric",
}).format(time);
return newhour;
}

export default function Busca() { 

  const [dados, setDados] = useState([]);

  useEffect(() => {
  
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)")
     .then(response => response.json())
     .then(dados => {
      setDados(dados.records);
      console.log(dados.records);
     })
  },[]);
    
  return (
    <div className={styles.fundoPagBusca}>
        <div className={styles.buscaMenu} >
            <Menu headerHeightMobile={5.875} headerHeightDesktop={7.5593}/>
        </div>
        <div className={styles.busca}>
            <div className={styles.buscaResultadoDiv}>
                <span className={styles.buscaTitulo}>Buscas realizadas</span>
            </div>

            <table className={styles.lista}>
                <thead>
                    <tr className={styles.listaTop}>
                        <th className={styles.listaResultadoTop}>Hashtag</th>
                        <th className={styles.listaResultadoTop}>Data</th>
                        <th className={styles.listaResultadoTop}>Hora</th>
                    </tr>
                </thead>
                <tbody>                        
                        {dados?.map(
                            item =>
                            (
                                <tr className="listingLine" key={item.id}>
                                    <td className={styles.listaResultadoLinha}>{item.fields.Hashtag}</td>
                                    <td className={styles.listaResultadoLinha}>{formatDate(item.fields.Data)}</td>
                                    <td className={styles.listaResultadoLinha}>{formatTime(item.fields.Hora)}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>

        </div>
    </div>
);
}


