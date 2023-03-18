import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Menu from '../../componentes/Menu/Menu'
import styles from './home.module.css'

function Home() {

    const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section>
            <div className="homeNav">
                <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25}/>
            </div>
            

            <div className={styles.header}>

            </div>

            <div className={styles.body}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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


                <div className={styles.listaApresentada}>
                    {itens.map((_, index) => {
                        return (
                            <div className={styles.itemContainer} key={index}>
                                <img src={`https://i.pravatar.cc/150?img=${index}`} alt="Imagem do Perfil" />
                                <article>
                                    <div>
                                        <h3>UserName</h3>
                                        <p>@twitterusername</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                                    <a href="#">Ver mais no Twitter</a>
                                </article>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section >
    )
}

export default Home