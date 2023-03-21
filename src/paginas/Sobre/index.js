import React from "react";
import styles from './sobre.module.css'


import Figura from "../../img/about-illustration.svg";
//import IconeGitHub from "../../img/icon-github.svg";
//import IconeEmail from "../../img/icon-envelope.svg";
//import IconeLikedIn from "../../img/icon-linkedin.svg";

import Rodape from "../../componentes/Rodape/index.js"
import Menu from "../../componentes/Menu";


 
function Sobre() {
  return ( 
    <div className={styles.sobre}>
      <header className={styles.fundo}>
        <Menu/>
        <div className={styles.titulo}>
          <h1 className={styles.tituloTexto}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.artigo}>
          <div className={styles.subtitulo}>
            <h2 className={styles.subtituloTexto}>O que é</h2>

            <div className={styles.blocoParagrafo}>
              <p className={styles.blocoParagrafoTexto}>
                Este é um projeto proposto pela NewTab Academy de desenvolvimento em equipe de uma página web responsiva para visualização de mensagens e imagens com integração com a API do Twitter. Foi desenvolvido de maneira incremental utilizando o conhecimento dos módulos HTML, CSS, Javascript e React. Foram disponibilizados 2 layouts para serem escolhidos e seguidos pelos membros do grupo, reuniões para decisões e colaborações gerais.
              </p>
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
      <div>
        <Rodape/>
      </div>
    </div>
   );
}

export default Sobre;
