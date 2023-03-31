import React, { useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import { toast } from 'react-toastify';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/';
import Rodape from '../../componentes/Rodape'
import Cartao from '../../componentes/CartaoDoUsuario';
import conectaAPI from '../../componentes/TwitterAPI/index.js'
import styles from './home.module.css';
import image from '../../img/search.png';

function Home() {

    document.title = 'Projeto hashtagfinder';

    //busca
    let [itemBusca, setItemBusca] = useState('');
    let [itemResultado, setItemResultado] = useState('');

    const [value, setValue] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
            if (itemBusca !== '') {
                fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=3&view=Grid%20view', {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                });
                setItemResultado(itemBusca);

                let url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,geo.place_id&media.fields=url&place.fields=country_code&user.fields=name,username,profile_image_url`;

                let resultFound = [];

                const fetchNow = function (url) {
                    conectaAPI(url).then(res => {
                        resultFound.push(...res.users)
                        if (resultFound.length < 10) {
                            fetchNow(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,geo.place_id&media.fields=url&place.fields=country_code&user.fields=name,username,profile_image_url&next_token=${res.token}`);
                        } else {
                            setValue(resultFound);
                            setError('');
                        }
                    }).catch(error => setError(error.message)).finally(() => {setIsLoading(false)});
                }
                fetchNow(url)
            } else {
                toast.error('Digite alguma hashtag para a busca!');
            }
        }

    }
    
    return (
        <section>

            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25} />
            </div>

            <div className={styles.header}>
                <h1>Encontre hashtags<br></br> de maneira fácil</h1>
                <p>Digite o que deseja no campo de buscas e<br></br> confira os resultados do Twitter abaixo</p>
                <input
                    type={'text'}
                    name={'Busca'}
                    placeholder={'Buscar...'}
                    onChange={itemBusca => setItemBusca(itemBusca.target.value.replace(/[#]/g, ''))}
                    value={itemBusca}
                    onKeyDown={(e) => handleKeyPress(e)}
                    maxLength="20"
                    required
                ></input>
            </div>

            {!(isLoading === false) ? '' : error !== '' ?
                <div className={styles.error}>
                    <h2>{error}</h2>
                    <img src={image} alt="Error" />
                </div> :
                <div className={styles.body}>
                    <h2>Exibindo os 10 resultados mais recentes para #{itemResultado}</h2>

                    <div className={styles.carrosselContainer}>
                        <Carrossel itens={value} />
                    </div>

                    <Cartao itens={value} />
                </div>
            }
            <Rodape />

        </section>
    )
}

export default Home