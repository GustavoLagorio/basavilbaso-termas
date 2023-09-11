import React from "react";
import Slider from "react-slick";

export default function HomeCarousel() {

    const imagenes = [
        "assets/bungalow1.jpg",
        "assets/bungalow2.jpg",
        "assets/bungalow3.jpg",
        "assets/bungalow4.jpg",
        "assets/bungalow5.jpg"
    ]
    let settings = {
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        speed: 1000,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        adaptiveHeight: true
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={imagenes[0]} alt="" />
            </div>
            <div>
                <img src={imagenes[1]} alt="" />
            </div>
            <div>
                <img src={imagenes[2]} alt="" />
            </div>
            <div>
                <img src={imagenes[3]} alt="" />
            </div>
            <div>
                <img src={imagenes[4]} alt="" />
            </div>
        </Slider>
    );
}