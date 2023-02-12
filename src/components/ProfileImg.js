import React from 'react';

import Penguin from '../assets/penguin-1299271_1280.webp';

export default function ProfileImg() {
  return (
    <div>
      <div className="w-[283px] h-[283px] border-[5px] rounded-[150px] mx-auto overflow-hidden m-6">
        <img src={Penguin} />
      </div>
    </div>
  );
}
