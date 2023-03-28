import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import './swiper.css'

function Carrossel({itens}) {
    console.log('--------------------------------------------------')
    console.log(itens)

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
            {itens.meta.result_count >= 10 ? itens.data.map((tweet, index) => {

                if('attachments' in tweet) {
                    console.log(tweet)
                    let mediaKey = tweet.attachments.media_keys[0];
                    console.log('mediaKey do Tweet com imagem' + mediaKey)
                    let url = itens.includes.media.filter((media) => {
                        if(media.media_key === mediaKey) {
                           return true;
                        }
                    })
                    console.log(url);
                    let id = tweet.author_id;
                    console.log('Id do tweet com imagem ' + id)
                    let users = itens.includes.users.filter((users) => {
                        if(users.id === id) {
                            return true
                        } 
                    });
                    console.log(users)
                    return (
                    <SwiperSlide key={index} id='slides'>
                        <div className='carrosselConteudo'>
                            <img src={url[0].url} alt="Foto de perfil" />
                            <p>Postado por: {users[0].name}<br></br>@${users[0].username}</p>
                        </div>
                    </SwiperSlide>)
                } else {
                    return []
                }
                }):''}

        </Swiper>
    )
}

export default Carrossel