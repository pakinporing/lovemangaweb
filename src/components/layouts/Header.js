import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { TbLogin } from 'react-icons/tb';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div>
          <Link>LoveManga</Link>
        </div>
        <div>
          <Link>มังงะทั้งหมด</Link>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex border-2 rounded-2xl items-center">
          <input type="text" placeholder="Search"></input>
          <div>
            <BiSearch />
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <AiOutlineStar className="text-[30px]" />
          </div>
          <div>
            <TbLogin className="text-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
