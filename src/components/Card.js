import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ mangaImg, mangaName, id }) {
  const navigate = useNavigate();

  return (
    <div
      className=" w-[220px] h-[309px]  mx-auto m-[10px] mb-[30px] "
      role="button"
      onClick={() => {
        navigate(`/mangapage/${id}`);
      }}
    >
      <div className="overflow-hidden rounded-[8px] w-[220px] h-[309px] ">
        <img src={mangaImg} className="" />
      </div>
      <div className="">{mangaName}</div>
    </div>
  );
}
