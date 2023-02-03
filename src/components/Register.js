import React from 'react';
import LoveManga from '../assets/LoveManga.png';

export default function Register() {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto">
          <form className="flex flex-col gap-2 items-center p-[64px]">
            <div>
              <img src={LoveManga} />
            </div>
            <div className="w-full">
              <p>อีเมล</p>
              <input type="text" className="" placeholder="อีเมล" />
            </div>

            <div className="w-full">
              <p>รหัสผ่าน</p>
              <input type="password" className="" placeholder="Password" />
            </div>

            <div className="w-full">
              <p>ยืนยันรหัสผ่าน</p>
              <input type="password" className="" placeholder="Password" />
            </div>
            <br />
            <br />
            <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#FFBC90] text-[#ffffff]">
              OK
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
