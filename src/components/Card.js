import React from 'react';

export default function Card({ mangaImg, mangaName }) {
  return (
    <div className=" w-[220px] h-[309px]  mx-auto m-[10px] ">
      <div className="overflow-hidden rounded-[10px]">
        <img src={mangaImg} />
      </div>
      <div className="">{mangaName}</div>
    </div>
  );
}
