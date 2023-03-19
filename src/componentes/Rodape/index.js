import React from 'react'
import styles from './rodape.module.css'

export default function rodape() {

    return (
        <footer className={styles.rodape}>
            <a className={styles.rodapeTexto}>
                @Newtab Academy 2023. Todos os direitos reservados.
            </a>
        </footer>
    )
}