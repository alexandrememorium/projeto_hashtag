
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './busca.module.css';
import Menu from '../../componentes/Menu';
import Aos from 'aos';

export default function Index() {
  document.title = 'Projeto HashtagFinder - Busca';

  let redirecionaBusca = false;

  if (localStorage.getItem('logado') === 'true') {
    redirecionaBusca = true;
  }

  const [campos, setCampos] = useState([]);
  const [pagina, setPagina] = useState('')

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {

    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)")
      .then(res => res.json())
      .then(res => {
        setPagina(res.offset)
        setCampos(res.records.map((record) => {
          return {
            hashtag: record.fields.Hashtag,
            data: new Date(record.fields.Data)
          }
        }))
      });

  }, [])

  useEffect(() => {
    const observadorEndPoint = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        fetch(`https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)&offset=${pagina}`)
          .then(res => res.json())
          .then(res => {
            setPagina(res.offset);
            setCampos((camposAntigos) => {
              return [...camposAntigos, ...res.records.map((record) => {
                return {
                  hashtag: record.fields.Hashtag,
                  data: new Date(record.fields.Data)
                }
              })]
            })
          });
      }
    });

    observadorEndPoint.observe(document.querySelector('#observador'));

    return () => observadorEndPoint.disconnect();
  }, [pagina])

  return (

    <div className={styles.fundoPag}>
      {redirecionaBusca === false ? <Redirect to="/" /> : ''}
      <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25} />

      <div className={styles.buscas_realizadas}>
        Buscas realizadas
      </div>
      <div className={styles.caixa}>
        <div className={styles.cabecalho}>
          <p className={styles.hashtag_cabecalho}>Hashtag</p>
          <p className={styles.data_cabecalho}>Data</p>
          <p className={styles.hora_cabecalho}>Hora</p>
        </div>

        <div style={{
          padding: '0px 20px',
          textTransform: 'lowercase'
        }}>
          <section className={styles.teste}>
            {campos.map((campo, index) => {
              return (
                <div data-aos='fade-up' className={styles.container_hashtag} key={index}>

                  <div className={styles.hashtag}>
                    #{campo.hashtag}
                  </div>

                  <div className={styles.data}>
                    {`${campo.data.toLocaleString('pt-BR', {
                      month: '2-digit',
                      day: '2-digit'
                    })}`}
                  </div>

                  <div className={styles.hora}>
                    {`${campo.data.toLocaleString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}`}
                  </div>
                </div>
              )
            })}
          </section>
        </div>
      </div>
      <div id='observador'></div>
    </div>


  );
}