import React from 'react';

export default function UpChapter() {
  return (
    <div>
      <div>
        <div className="w-[389px] h-[262px] border-[5px] rounded-[5px] mx-auto overflow-hidden m-6">
          <img />
        </div>
      </div>
      <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto p-[20px]">
        <form className="flex flex-col gap-3 items-center">
          <div className="w-full">
            <p>ชื่อมังงะ</p>
            <input type="text" className="" placeholder="ชื่อมังงะ" />
          </div>

          <div className="w-full">
            <p>ตอนที่</p>
            <input
              type="text"
              className=""
              placeholder="รบกวนกรอกเป็นตัวเลขเท่านั้นนะ"
            />
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
        </form>
      </div>
    </div>
  );
}
