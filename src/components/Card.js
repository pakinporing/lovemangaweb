import React from 'react';

export default function Card({ src, MangaName }) {
  return (
    <div className=" w-[220px] h-[309px]  mx-auto m-[10px] ">
      <div className="overflow-hidden rounded-[10px]">
        <img src={src} />
      </div>
      <div className="">{MangaName}</div>
    </div>
  );
}
