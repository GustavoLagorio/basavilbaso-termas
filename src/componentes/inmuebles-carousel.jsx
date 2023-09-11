import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/zoom';

export default function InmueblesCarousel() {

    const imagenes = [
        "assets/bungalow1.jpg",
        "assets/bungalow2.jpg",
        "assets/bungalow3.jpg",
        "assets/bungalow4.jpg",
        "assets/bungalow5.jpg"
    ]

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Zoom]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            zoom={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={'cube'}
            cubeEffect={{
                shadow: true,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}     
              loop={true}
        >
            <SwiperSlide>
                <div className='swiper-zoom-container'>
                    <img src={imagenes[0]} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-zoom-container'>
                    <img src={imagenes[1]} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-zoom-container'>
                    <img src={imagenes[2]} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-zoom-container'>
                    <img src={imagenes[3]} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-zoom-container'>
                    <img src={imagenes[4]} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};