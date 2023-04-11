import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import './swiper.css'
import PopUp from '../PopUp'
import { useState } from 'react'

function Carrossel({ itens }) {

    const [infoImagem, setInfoImagem] = useState('');
    const [trigger, setTrigger] = useState(false);

    return (
        <>

            <Swiper
                loop={true}
                modules={[Navigation, Pagination]}
                slidesPerView={2}
                pagination={{
                    dynamicBullets: true
                }}
                navigation={true}
                breakpoints={{
                    500: {
                        slidesPerView: 2
                    },
                    650: {
                        slidesPerView: 4
                    },
                    1300: {
                        slidesPerView: 5,
                    }
                }}
                style={{
                    "--swiper-pagination-bullet-size": "12px"
                }}
            >
                {itens.map((tweet, index) => {

                    return (
                        <SwiperSlide key={index} id='slides' onClick={(e) => {
                            setInfoImagem(tweet); 
                            setTrigger(true)}}>
                            <div className='carrosselConteudo'>
                                <img src={tweet.media} alt=""/>
                                <p>Postado por: {tweet.nome}<br></br>@{tweet.user}</p>
                            </div>
                        </SwiperSlide>)


                })}
            </Swiper>
            <PopUp trigger={trigger} setTrigger={setTrigger} setUser={infoImagem}/>
        </>

    )
}

export default Carrossel