import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/zoom';


export default function BungalowCarousel({ imagenes }) {

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
            {imagenes.map((imagen) => {
                
                    return (

                        <SwiperSlide key={imagen}>
                            <div className='swiper-zoom-container'>
                                <img src={imagen} alt="Imagen del Bungalow" />
                            </div>
                        </SwiperSlide>

                    )
                }

            )}
        </Swiper>
    );
};