import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import './swiper.css'

function Carrossel({itens}) {

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
            {itens.map((_, index) => {
                return (
                    <SwiperSlide key={index} id='slides'>
                        <div className='carrosselConteudo'>
                            <img src={`https://picsum.photos/id/${10 + index}/200/300`} alt="" />
                            <p>Postado por: <br></br>@twitterusername</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carrossel