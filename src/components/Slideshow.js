import React from 'react';
import { Carousel } from 'flowbite-react';

import Img1 from '../assets/slideshow/3877.jpg';
import Img2 from '../assets/slideshow/3943.jpg';
import Img3 from '../assets/slideshow/3949.jpg';
import Img4 from '../assets/slideshow/3952.jpg';
import Img5 from '../assets/slideshow/3953.jpg';
import Img6 from '../assets/slideshow/3957.jpg';

export default function Slideshow() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={Img1} alt="..." />
        <img src={Img2} alt="..." />
        <img src={Img3} alt="..." />
        <img src={Img4} alt="..." />
        <img src={Img5} alt="..." />
        <img src={Img6} alt="..." />
      </Carousel>
    </div>
  );
}
