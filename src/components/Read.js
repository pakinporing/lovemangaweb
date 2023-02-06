import React from 'react';

export default function Read({ src }) {
  return (
    <div>
      <div className="flex justify-center">
        <img src={src} />
      </div>
      <div className="flex justify-center gap-10 p-[30px]">
        <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#D8D3CD] text-[#ffffff]">
          ก่อนหน้า
        </button>
        <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#86AED1] text-[#ffffff]">
          หน้าหลัก
        </button>
        <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#FFBC90] text-[#ffffff]">
          ถัดไป
        </button>
      </div>
    </div>
  );
}
