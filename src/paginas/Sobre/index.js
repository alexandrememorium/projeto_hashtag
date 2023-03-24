import React from "react";
import styles from './sobre.module.css'


import Figura from "../../img/about-illustration.svg";
import IconeGitHub from "../../img/icon-github.svg";
import IconeEmail from "../../img/icon-envelope.svg";
import IconeLikedIn from "../../img/icon-linkedin.svg";

import Rodape from "../../componentes/Rodape/index.js"
import Menu from "../../componentes/Menu";

const membros = [
  {
    nome:"NomeSobrenome",
    descricao:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
    foto: "https://img.freepik.com/fotos-gratis/freelancer-feliz-com-tablet-e-laptop-em-uma-cafeteria_342744-942.jpg?w=740&t=st=1679581410~exp=1679582010~hmac=c2ba6c2202d2bc9400336ee78a1e745ee6f4add0a26f5479e7e1fafbf61f222f"
  },

  {
    nome:"NomeSobrenome",
    descricao:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
    foto: "https://img.freepik.com/fotos-gratis/freelancer-feliz-com-tablet-e-laptop-em-uma-cafeteria_342744-942.jpg?w=740&t=st=1679581410~exp=1679582010~hmac=c2ba6c2202d2bc9400336ee78a1e745ee6f4add0a26f5479e7e1fafbf61f222f"
  },

  {
    nome:"NomeSobrenome",
    descricao:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
    foto: "https://img.freepik.com/fotos-gratis/freelancer-feliz-com-tablet-e-laptop-em-uma-cafeteria_342744-942.jpg?w=740&t=st=1679581410~exp=1679582010~hmac=c2ba6c2202d2bc9400336ee78a1e745ee6f4add0a26f5479e7e1fafbf61f222f"
  },

  {
    nome:"NomeSobrenome",
    descricao:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
    foto: "https://img.freepik.com/fotos-gratis/freelancer-feliz-com-tablet-e-laptop-em-uma-cafeteria_342744-942.jpg?w=740&t=st=1679581410~exp=1679582010~hmac=c2ba6c2202d2bc9400336ee78a1e745ee6f4add0a26f5479e7e1fafbf61f222f"
  },

  {
    nome:"NomeSobrenome",
    descricao:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
    foto: "https://img.freepik.com/fotos-gratis/freelancer-feliz-com-tablet-e-laptop-em-uma-cafeteria_342744-942.jpg?w=740&t=st=1679581410~exp=1679582010~hmac=c2ba6c2202d2bc9400336ee78a1e745ee6f4add0a26f5479e7e1fafbf61f222f"
  },

];
 
function Sobre() {
  return ( 
    <div className={styles.sobre}>
      <header className={styles.fundo}>
        <Menu headerHeightMobile={12.875} headerHeightDesktop={26.3643}/>
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
      
      <div className={styles.containerGeral}>
        {membros.map((informacao, id) => (
          <div className={styles.container} key={id}>
            <div className={styles.containerMembros}>
              <div className={styles.containerCartaoMembros}>
                <img
                  className={styles.membroFoto}
                  src={informacao.foto}
                  alt=' '
                />
                <div className={styles.informacaoMembros}>
                  <h3 className={styles.informacaoMembrosTitulo}>
                    {informacao.nome}
                  </h3>
                  <p className={styles.informacaoMembrosTexto}>
                    {informacao.descricao}
                  </p>
                </div>
                <div className={styles.containerIcones}>
                  <a
                    href="/"
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
                    href="/"
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
                    href="/"
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
