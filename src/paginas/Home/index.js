import React from 'react';
import 'swiper/swiper-bundle.min.css';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/';
import styles from './home.module.css';
import Rodape from '../../componentes/Rodape'
import Cartao from '../../componentes/CartaoDoUsuario';

function Home() {

    const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section>
            
            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25} />
            </div>

            <div className={styles.header}>
                <h1>Encontre hashtags<br></br> de maneira fácil.</h1>
                <p>Digite o que deseja no campo de buscas e<br></br> confira os resultados do Twitter abaixo</p>
                <input type={Text} name={'Busca'} placeholder={'Buscar...'}></input>
            </div>

            <div className={styles.body}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>

                <div className={styles.carrosselContainer}>
                    <Carrossel itens={itens}/>
                </div>

                <Cartao itens={itens}/>

            </div>
            <Rodape />

        </section>
    )
}

export default Home