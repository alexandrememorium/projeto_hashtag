import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Menu from '../../componentes/Menu/Menu';
import styles from './home.module.css';
import { BsArrowRightCircleFill } from 'react-icons/bs'


import Menu from '../../componentes/Menu'
import Rodape from '../../componentes/Rodape'
import styles from './home.module.css'

function Home() {

    const [largura, setLargura] = useState();
    
    useEffect(() => {
        function handleResize() {
            setLargura(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

      })
    const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    return (
        <section>

            
                <Menu />
            

            <div className={styles.header}>

            </div>

            <div className={styles.body}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>
                
                <Swiper
                    spaceBetween={25}
                    
                    pagination={largura >= 768 ? true:false}
                    navigation={largura >= 768 ? true:false}
                    breakpoints={{
                        300: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    
                >
                    {itens.map((_, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.swiperConteudo}>
                                    <img src={`https://picsum.photos/id/${10 + index}/200/300`} alt="" />
                                    <p>Postado por: <br></br>@twitterusername</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <div className={styles.listaDeUsuarios}>
                    {itens.map((_, index) => {
                        return (
                            <div className={styles.itemContainer} key={index}>
                                <div className={styles.itemContent}>
                                    <img src={`https://i.pravatar.cc/150?img=${index}`} alt="Imagem do Perfil" />
                                    <div className={styles.usuarioInfo}>
                                        <div>
                                            <h3>UserName</h3>
                                            <p>@twitterusername</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                                        <a href="#">Ver mais no Twitter</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Rodape></Rodape>

        </section>
    )
}

export default Home