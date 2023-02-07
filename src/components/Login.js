import React, { useState } from 'react';
import LoveManga from '../assets/LoveManga.png';

export default function Login() {
  const [open, setOpen] = useState(false);
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
            <br />
            <br />
            <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#FFBC90] text-[#ffffff]">
              Log In
            </button>

            <span className="w-full">
              อ้าว!!! ยังไม่ได้เป็นสมาชิกหรอ..........
            </span>
            <span onClick={() => setOpen(true)}>สมัครสิรออะไร</span>

            <button className="border-[2px] rounded-[30px] w-[321px] h-[57px] bg-[#86AED1] text-[#ffffff]">
              เข้าสู่ระบบด้วย Facebook
            </button>
            <button className="border-[2px] rounded-[30px] w-[321px] h-[57px] bg-[#FF8C94] text-[#ffffff]">
              เข้าสู่ระบบด้วย Gmail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
