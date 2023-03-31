import React, { useState, useEffect } from "react";
import styles from './sobre.module.css'


import Figura from "../../img/about-illustration.svg";
import IconeGitHub from "../../img/icon-github.svg";
import IconeEmail from "../../img/icon-envelope.svg";
import IconeLikedIn from "../../img/icon-linkedin.svg";

import Rodape from "../../componentes/Rodape/index.js"
import Menu from "../../componentes/Menu";

document.title="Projeto hashtagfinder - Sobre"
 
const Sobre = () => {

  const [texto, setTexto] = useState("");
  const [equipe, setEquipe] = useState([]);

  const API_KEY = "keykXHtsEPprqdSBF"

      useEffect(() => {
        fetch(
          "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=" +
            encodeURI(`({Squad} = '03-23')`),
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            setTexto(response.records[0].fields.Sobre);
          })
          .catch((erro) => console.log(erro));

      
        fetch(
          "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=" +
            encodeURI(`({Squad} = '03-23')`),
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            setEquipe(response.records);
          })
          .catch((erro) => console.log(erro));
      }, []);

    return ( 
    <div className={styles.sobre}>
      <header className={styles.fundo}>
        <Menu  headerHeightMobile={12.875} headerHeightDesktop={26.3643}/>
        <div className={styles.titulo}>
          <h1 className={styles.tituloTexto}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.artigo}>
          <div className={styles.subtitulo}>
            <h2 className={styles.subtituloTexto}>O que é</h2>

            <div className={styles.blocoParagrafo}>
            <p
                className={styles.blocoParagrafoTexto}
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            </div>
          </div>

          <div className={styles.blocoImagem}>
            <img
              src={Figura}
              alt='Imagem duas pessoas em um quadro com projeto'></img>
          </div>
        </section>
      </main>
      <section className={styles.quemSomos}>
        <div className={styles.subtitulo2}>
          <h2 className={styles.subtitulo2Texto}>Quem somos</h2>
        </div>
      </section>
      
      <div className={styles.containerGeral}>
        {equipe.map((informacao, id) => (
          <div className={styles.container} key={id}>
            <div className={styles.containerMembros}>
              <div className={styles.containerCartaoMembros}>
                <img
                  className={styles.membroFoto}
                  src={informacao.fields.Imagem[0].url}
                  alt=' '
                />
                <div className={styles.informacaoMembros}>
                  <h3 className={styles.informacaoMembrosTitulo}>
                    {informacao.fields.Nome}
                  </h3>
                  <p className={styles.informacaoMembrosTexto}>
                    {informacao.fields.Descrição}
                  </p>
                </div>
                <div className={styles.containerIcones}>
                  <a
                    href={informacao.fields.Github}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeGitHub}
                      alt='icone'
                      className={styles.icones}
                      title='Github'
                    />
                  </a>
                  <a
                    href={`mailto:${informacao.fields.Email}`}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeEmail}
                      alt='icone'
                      className={styles.icones}
                      title='Email'
                    />
                  </a>
                  <a
                    href={informacao.fields.LinkedIn}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeLikedIn}
                      alt='icone'
                      className={styles.icones}
                      title='LinkedIn'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <Rodape/>
      
    </div>
   );
}

export default Sobre;
