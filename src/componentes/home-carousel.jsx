import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Autoplay, EffectCube} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

export default function HomeCarousel() {

    const imagenes = [
        "assets/bungalow1.jpg",
        "assets/bungalow2.jpg",
        "assets/bungalow3.jpg",
        "assets/bungalow4.jpg",
        "assets/bungalow5.jpg"
    ]

    return (
        <Swiper
            modules={[A11y, Autoplay, EffectCube]}
            spaceBetween={100}
            autoplay={{delay:2500, disableOnInteraction:false}}
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
            <SwiperSlide><img src={imagenes[0]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imagenes[1]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imagenes[2]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imagenes[3]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imagenes[4]} alt="" /></SwiperSlide>
        </Swiper>
    );
};