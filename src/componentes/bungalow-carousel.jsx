import React from "react";
import Slider from "react-slick";

import CustomPaging from "./paginacion-carrousel"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default function HomeCarousel() {

    const imagenes = [
        "assets/bungalow1.jpg",
        "assets/bungalow2.jpg",
        "assets/bungalow3.jpg",
        "assets/bungalow4.jpg",
        "assets/bungalow5.jpg"
    ]

    let settings = {        
        centerMode: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,        
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