import React from 'react';
// import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { TbLogin } from 'react-icons/tb';

import LoveManga from '../../assets/LoveManga.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-[10px]">
      <div className="flex gap-3 items-center">
        <div className="p-[12px]">
          <img src={LoveManga} role="button" onClick={() => navigate('/')} />
        </div>
        <div onClick={() => navigate('/allmangapage')} role="button">
          มังงะทั้งหมด
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex border-2 rounded-2xl items-center">
          <input type="text" placeholder="Search"></input>
          <div>
            <BiSearch className="text-[36px]" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <BsStarFill className="text-[48px] text-[#F4ED7F]" role="button" />
          </div>
          <div onClick={() => navigate('/loginpage')} role="button">
            <TbLogin className="text-[48px] text-[#679A7D]" />
          </div>
        </div>
      </div>
    </div>
  );
}
