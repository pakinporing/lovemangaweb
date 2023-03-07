import React from 'react';

export default function ImgManga({ src, manganame, mangades }) {
  return (
    <div className="w-[100%] flex flex-col items-center ">
      <img className="h-[741px] w-[471px] rounded-[30px]" src={src} />

      <div>
        <h1 className="text-[40px]">{manganame}</h1>
      </div>
      <div className="bg-[#ffffff] w-[909px] h-[215px] rounded-[30px] flex items-center">
        <p className="p-[40px]">{mangades}</p>
      </div>
    </div>
  );
}
