import React from 'react'
import styles from './cartao.module.css'

function Cartao({ itens }) {
    
    // console.log('Cartão');
    // console.log(itens);

    return (
        <div className={styles.listaDeUsuarios}>
            
            {itens === null ? '': itens.map((tweet, index) => {
                // console.log(tweet)
                return (
                    <div className={styles.itemContent} key={index}>
                        <img src={tweet.ftPerfil} alt="Imagem do Perfil" />
                        <div className={styles.usuarioInfo}>
                            <div>
                                <h3>{tweet.nome}</h3>
                                <p>{`@${tweet.user}`}</p>
                            </div>
                            <p>{tweet.texto}</p>
                            <a href="http://www.twitter.com">Ver mais no Twitter</a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cartao