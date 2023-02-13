import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import Img1 from '../assets/slideshow/3877.jpg';
import Img2 from '../assets/slideshow/3943.jpg';
import Img3 from '../assets/slideshow/3949.jpg';
import Img4 from '../assets/slideshow/3952.jpg';
import Img5 from '../assets/slideshow/3953.jpg';
import Img6 from '../assets/slideshow/3957.jpg';

export default function Slideshow() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="w-full h-full">
          <img
            src={Img1}
            role="button"
            onClick={() => navigate('/')}
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <img src={Img2} role="button" onClick={() => navigate('/')} />
      </div>
      <div>
        <img src={Img3} role="button" onClick={() => navigate('/')} />
      </div>
      <div>
        <img src={Img4} role="button" onClick={() => navigate('/')} />
      </div>
      <div>
        <img src={Img5} role="button" onClick={() => navigate('/')} />
      </div>
      <div>
        <img src={Img6} role="button" onClick={() => navigate('/')} />
      </div>
    </Slider>
  );
}
