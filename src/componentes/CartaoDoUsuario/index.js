import React from 'react'
import styles from './cartao.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

<<<<<<< HEAD
function Cartao({itens}) {
    return (
        <div className={styles.listaDeUsuarios}>
            {itens.map((_, index) => {
                return (
                    <div className={styles.itemContent} key={index}>
                        <img src={`https://i.pravatar.cc/150?img=${index}`} alt="Imagem do Perfil" />
                        <div className={styles.usuarioInfo}>
                            <div>
                                <h3>UserName</h3>
                                <p>@twitterusername</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
=======
function Cartao({ itens }) {
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className={styles.listaDeUsuarios}>
            
            {itens.map((tweet, index) => {
                
                return (
                    <div data-aos="fade-up" className={styles.itemContent} key={index}>
                        <img src={tweet.ftPerfil} alt="Imagem do Perfil" />
                        <div className={styles.usuarioInfo}>
                            <div>
                                <h3>{tweet.nome}</h3>
                                <p>{`@${tweet.user}`}</p>
                            </div>
                            <p>{tweet.texto}</p>
>>>>>>> desenvolvimento
                            <a href="http://www.twitter.com">Ver mais no Twitter</a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cartao