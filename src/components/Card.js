import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ mangaImg, mangaName, id }) {
  const navigate = useNavigate();

  return (
    <div
      className=" w-[220px] h-[309px]  mx-auto m-[10px] "
      role="button"
      onClick={() => {
        navigate(`/mangapage/${id}`);
      }}
    >
      <div className="overflow-hidden rounded-[10px] w-[220px] h-[309px]">
        <img src={mangaImg} />
      </div>
      <div className="">{mangaName}</div>
    </div>
  );
}
