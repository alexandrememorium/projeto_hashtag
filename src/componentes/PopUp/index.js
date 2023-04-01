import React from 'react';
import styles from './popUp.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function PopUp({ trigger, setTrigger, setUser }) {

    const { media, nome, texto, user } = setUser;
    if (trigger) {
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            imageUrl: media,
            title: <p>{nome}</p>,
            html:
                <div className={styles.PopUp}>
                    <p><b>@{user}</b></p>
                    <p>{texto}</p>
                </div>,
            customClass: {
                confirmButton: `${styles.botaoFechar}`,
                image: `${styles.imagemTweet}`
            },
            didClose: setTrigger(false)
        })
    }
    return ('')
}

export default PopUp