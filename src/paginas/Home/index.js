import React from 'react';
import 'swiper/swiper-bundle.min.css';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/Menu';
import styles from './home.module.css';

function Home() {

    const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section>
            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25} />
            </div>

            <div className={styles.header}>

            </div>

            <div className={styles.body}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>

                <div className={styles.carrosselContainer}>
                    <Carrossel itens={itens}/>
                </div>

                <div className={styles.listaDeUsuarios}>
                    {itens.map((_, index) => {
                        return (
                            <div className={styles.itemContainer} key={index}>
                                <div className={styles.itemContent}>
                                    <img src={`https://i.pravatar.cc/150?img=${index}`} alt="Imagem do Perfil" />
                                    <div className={styles.usuarioInfo}>
                                        <div>
                                            <h3>UserName</h3>
                                            <p>@twitterusername</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                                        <a href="http://www.twitter.com">Ver mais no Twitter</a>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </section>
    )
}

export default Home