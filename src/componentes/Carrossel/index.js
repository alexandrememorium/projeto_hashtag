import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import './swiper.css'

function Carrossel({ itens }) {

    // console.log('Carrossel');
    // console.log(itens);

    return (
        <Swiper
            loop={true}
            modules={[Navigation, Pagination]}
            spaceBetween={15}
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
                    spaceBetween: 50
                }
            }}
            style={{
                "--swiper-pagination-bullet-size": "12px"
            }}
        >
            {itens === null ? '': itens.map((tweet, index) => {

                return (
                    <SwiperSlide key={index} id='slides'>
                        <div className='carrosselConteudo'>
                            <img src={tweet.media} alt="Foto de perfil" />
                            <p>Postado por: {tweet.nome}<br></br>@${tweet.user}</p>
                        </div>
                    </SwiperSlide>)


            })}
        </Swiper>
    )
}

export default Carrossel