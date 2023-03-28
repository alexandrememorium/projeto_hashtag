import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/';
import styles from './home.module.css';
import Rodape from '../../componentes/Rodape'
import Cartao from '../../componentes/CartaoDoUsuario';
import { toast } from 'react-toastify';
import conectaAPI from '../../componentes/TwitterAPI/index.js'

function Home() {

    //busca
    const [itemBusca, setItemBusca] = useState('');
    /*console.log(itemBusca)*/

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("Authorization", "Bearer keykXHtsEPprqdSBF");

    var raw = JSON.stringify({
        "records": [
            {
                "fields": {
                    "Squad": "03-23",
                    "Hashtag": itemBusca,
                    "Data": Date.now()
                }
            }
        ]
    })

    function handleKeyPress(e) {
        var key = e.key;
        
        if (key === "Enter") {
            if (itemBusca !== ''){
            fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=3&view=Grid%20view', {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                })
            } else {
                toast.error('Digite alguma hashtag para a busca!');
            }
        }
    }
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(itemBusca) {

            conectaAPI(itemBusca, setValue, setError, setIsLoading);
        }
    }, [itemBusca])

    return (
        <section>

            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25} />
            </div>

            <div className={styles.header}>
                <h1>Encontre hashtags<br></br> de maneira fácil.</h1>
                <p>Digite o que deseja no campo de buscas e<br></br> confira os resultados do Twitter abaixo</p>
                <input
                    type={'text'}
                    name={'Busca'}
                    placeholder={'Buscar...'}
                    onChange={itemBusca => setItemBusca(itemBusca.target.value)}
                    value={itemBusca}
                    onKeyDown={(e) => handleKeyPress(e)}
                    maxLength="20"
                    required
                ></input>
            </div>

            {isLoading === true ? '':
                <div className={styles.body}>
                    <h2>Exibindo os 10 resultados mais recentes para #{itemBusca}</h2>

                    <div className={styles.carrosselContainer}>
                        <Carrossel itens={value} />
                    </div>

                    <Cartao itens={value} />

                </div>}
            <Rodape />

        </section>
    )
}

export default Home