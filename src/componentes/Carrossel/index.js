import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import './swiper.css'

function Carrossel({ itens }) {
    
    return (
        <Swiper
            loop={true}
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            pagination={{
                dynamicBullets: true,
                dynamicMainBullets: 2
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
            {itens === null ? '': itens.slice(0, 10).map((tweet, index) => {

                return (
                    <SwiperSlide key={index} id='slides'>
                        <div className='carrosselConteudo'>
                            <img src={tweet.media} alt="" />
                            <p>Postado por: {tweet.nome}<br></br>@${tweet.user}</p>
                        </div>
                    </SwiperSlide>)


            })}
        </Swiper>
    )
}

export default Carrossel