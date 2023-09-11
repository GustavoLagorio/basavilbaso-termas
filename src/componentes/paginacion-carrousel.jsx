import React from 'react';

const CustomPaging = ({ currentSlide }) => (
    <div className="custom-paging">
        <a href="">
            <img src={currentSlide} alt="" />
        </a>
    </div>
);

export default CustomPaging;