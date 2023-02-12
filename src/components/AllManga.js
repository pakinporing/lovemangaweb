import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/Allmanga.png';

export default function AllManga({ manga }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center p-[40px]">
        <img src={img} />
        <div className="w-[995px] h-[2126px] bg-white rounded-[30px] p-[40px] shadow-sm">
          {manga?.map((el) => {
            return (
              <p
                role="button"
                onClick={() => {
                  navigate(`/mangapage/${el.id}`);
                }}
              >
                {el.mangaName}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
