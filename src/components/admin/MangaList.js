import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MangaList({ manga }) {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-center text-[36px]">Manga List</div>
      <div className="p-[30px] m-[auto] rounded-[30px] w-[963px] h-[1530px] bg-[#ffffff]">
        <div>
          <button
            className=" border-[2px] rounded-[10px] w-[172px] h-[57px] bg-[#86AED1] text-[#ffffff]"
            role="button"
            onClick={() => {
              navigate(`/upmangapage/`);
            }}
          >
            เพิ่มมังงะ
          </button>
          <div>
            {manga?.map((el) => {
              return (
                <p
                  role="button"
                  onClick={() => {
                    navigate(`/upchapterpage/${el.id}`);
                  }}
                >
                  {el.mangaName}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
