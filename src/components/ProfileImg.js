import React from 'react';

import Penguin from '../assets/penguin-1299271_1280.webp';

export default function ProfileImg({ src, size }) {
  return (
    <div>
      <img
        src={src || Penguin}
        className=" border-[2px] rounded-full mx-auto overflow-hidden m-6"
        width={size}
        height={size}
      />
    </div>
  );
}
