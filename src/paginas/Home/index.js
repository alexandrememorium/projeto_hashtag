import React, { useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import { toast } from 'react-toastify';
import Carrossel from '../../componentes/Carrossel';
import Menu from '../../componentes/Menu/';
import Rodape from '../../componentes/Rodape'
import Cartao from '../../componentes/CartaoDoUsuario';
import conectaAPI from '../../componentes/TwitterAPI/index.js'
import styles from './home.module.css';
import imagem from '../../img/search.png';

function Home() {

    document.title = 'Projeto HashtagFinder';

    //busca
    let [itemBusca, setItemBusca] = useState('');
    let [itemResultado, setItemResultado] = useState('');

    const [valor, setValor] = useState(null);
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(true);

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

                let resultadoEncontrado = [];

                const buscaTweets = function (url) {
                    conectaAPI(url).then(res => {
                        if (resultadoEncontrado.length < 10) {
                            resultadoEncontrado.push(...res.users)
                            buscaTweets(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${itemBusca} lang:pt has:images&expansions=attachments.media_keys,author_id,referenced_tweets.id,geo.place_id&media.fields=url&place.fields=country_code&user.fields=name,username,profile_image_url&next_token=${res.token}`);
                        } else {
                            
                            setErro('');
                        }
                    }).catch(erro => setErro(erro.message)).finally(() => {setCarregando(false);setValor(resultadoEncontrado.slice(0, 10));});
                }
                buscaTweets(url)
            } else {
                toast.error('Digite alguma hashtag para a busca!');
            }
        }

    }
    console.log(valor)
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

            {!(carregando === false) ? '' : erro !== '' ?
                <div className={styles.error}>
                    <h2>{erro}</h2>
                    <img src={imagem} alt="Erro" />
                </div> :
                <div className={styles.body}>
                    <h2>Exibindo os 10 resultados mais recentes para #{itemResultado}</h2>

                    <div className={styles.carrosselContainer}>
                        <Carrossel itens={valor} />
                    </div>

                    <Cartao itens={valor} />
                </div>
            }
            <Rodape />

        </section>
    )
}

export default Home