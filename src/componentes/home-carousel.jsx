import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCube } from 'swiper/modules';
import imagenes from '../../imagenes.json';

import 'swiper/css';
import 'swiper/css/effect-cube';

export default function HomeCarousel() {
    
    const imagenesHome = imagenes[0].home


    return (
        <Swiper
            modules={[A11y, Autoplay, EffectCube]}
            spaceBetween={100}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={1}
            centeredSlides={true}
            effect={'cube'}
            cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 0,
                shadowScale: 0,
            }}
            speed={1000}
            loop={true}
        >
            <SwiperSlide><img src={ imagenesHome[1] } alt="Bungalow Añil 1" /></SwiperSlide>
            <SwiperSlide><img src={ imagenesHome[2] } alt="Bungalow Añil 2" /></SwiperSlide>
            <SwiperSlide><img src={ imagenesHome[3] } alt="Bungalow La Mery" /></SwiperSlide>
        </Swiper>
    );
};