import React, { useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/';
import styles from './home.module.css';
import Rodape from '../../componentes/Rodape'
import Cartao from '../../componentes/CartaoDoUsuario';
import useFetch from '../../componentes/TwitterAPI/index.js'

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
                    "Hashtag": {itemBusca},
                    "Data": 123123
                }
            }
        ]
    })

    function handleKeyPress(e) {
        var key = e.key;
        if (key === "Enter") {
            console.log('você apertou enter')
            fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)', {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            })
        }
    }

    //twitter
    const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const texto = 'natureza'

    const { isLoading, value } = useFetch(texto)

    return (
        <section>
            
            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25} />
            </div>

            <div className={styles.header}>
                <h1>Encontre hashtags<br></br> de maneira fácil.</h1>
                <p>Digite o que deseja no campo de buscas e<br></br> confira os resultados do Twitter abaixo</p>
                <input 
                    type={Text} 
                    name={'Busca'} 
                    placeholder={'Buscar...'}
                    onChange={itemBusca => setItemBusca(itemBusca.target.value)}
                    value={itemBusca}
                    onKeyPress={(e) => handleKeyPress(e)}
                    requiredname={'Busca'} 
                ></input>
            </div>

            <div className={styles.body}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>

                <div className={styles.carrosselContainer}>
                    <Carrossel itens={itens}/>
                </div>

                {isLoading === false ? <Cartao itens={value} /> : ''}

            </div>
            <Rodape />

        </section>
    )
}

export default Home