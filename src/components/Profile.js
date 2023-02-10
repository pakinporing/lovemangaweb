import React from 'react';
import Penguin from '../assets/penguin-1299271_1280.webp';
import { removeAccessToken } from '../utils/local-storage';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate('/loginpage');
  };

  return (
    <div>
      <div>
        <div className="w-[283px] h-[283px] border-[5px] rounded-[150px] mx-auto overflow-hidden m-6">
          <img src={Penguin} />
        </div>
      </div>
      <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto p-[20px]">
        <form className="flex flex-col gap-3 items-center">
          <div className="flex gap-3">
            <button
              className="border-[2px] rounded-[10px] w-[172px] h-[57px] bg-[#FF8C94] text-[#ffffff]"
              role="button"
            >
              ทั่วไป
            </button>
            <button
              className="border-[2px] rounded-[10px] w-[172px] h-[57px] bg-[#86AED1] text-[#ffffff]"
              role="button"
            >
              สิทธิสำหรับAdmin
            </button>
          </div>

          <div className="w-full">
            <p>นามแฝง</p>
            <input type="text" className="" placeholder="นามแฝง" />
          </div>

          <div className="w-full">
            <p>ชื่อจริง</p>
            <input type="password" className="" placeholder="ชื่อจริง" />
          </div>

          <div className="w-full">
            <p>นามสกุล</p>
            <input type="password" className="" placeholder="นามสกุล" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="flex gap-3">
            <button
              className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#D8D3CD] text-[#ffffff]"
              role="button"
            >
              cancle
            </button>
            <button
              className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#FFBC90] text-[#ffffff]"
              role="button"
            >
              save
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#D8D3CD] text-[#ffffff]"
            role="button"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
