import React from 'react';
// import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { TbLogin } from 'react-icons/tb';
import { Navigate } from 'react-router-dom';
import LoveManga from '../../assets/LoveManga.png';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="p-[12px]">
          <img src={LoveManga} />
        </div>
        <div>มังงะทั้งหมด</div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex border-2 rounded-2xl items-center">
          <input type="text" placeholder="Search"></input>
          <div>
            <BiSearch />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <BsStarFill className="text-[48px] text-[#F4ED7F]" />
          </div>
          <div>
            <TbLogin className="text-[48px] text-[#679A7D]" />
          </div>
        </div>
      </div>
    </div>
  );
}
