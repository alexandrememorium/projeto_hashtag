import React from 'react'
import styles from './cartao.module.css'

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
                            <a href="http://www.twitter.com">Ver mais no Twitter</a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cartao