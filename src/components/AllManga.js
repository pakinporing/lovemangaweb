import React from 'react';
import img from '../assets/Allmanga.png';

export default function AllManga({ manga }) {
  console.log(manga);
  return (
    <>
      {manga?.map((el) => {
        return (
          <div className="flex flex-col items-center p-[40px]">
            <img src={img} />
            <div className="w-[995px] h-[2126px] bg-white rounded-[30px] p-[40px] shadow-sm">
              <p>{el.mangaName}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
