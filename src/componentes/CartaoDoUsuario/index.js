import React from 'react'
import styles from './cartao.module.css'

function Cartao({ itens }) {

    console.log(itens)
    
    return (
        <div className={styles.listaDeUsuarios}>

            {itens.data.map((_, index) => {
                return (
                    <div className={styles.itemContent} key={index}>
                        <img src={itens.includes.users[index].profile_image_url
                        } alt="Imagem do Perfil" />
                        <div className={styles.usuarioInfo}>
                            <div>
                                <h3>{itens.includes.users[index].name}</h3>
                                <p>{`@${itens.includes.users[index].username}`}</p>
                            </div>
                            <p>{itens.data[index].text}</p>
                            <a href="http://www.twitter.com">Ver mais no Twitter</a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cartao