import React, { useState } from 'react';

export default function UpChapter() {
  const [file, setFile] = useState(null);
  const [chapter, setChapter] = useState('');

  return (
    <div>
      <div>
        <div className="w-[389px] h-[262px] border-[5px] rounded-[5px] mx-auto overflow-hidden m-6">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
      </div>
      <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto p-[20px]">
        <form className="flex flex-col gap-3 items-center">
          <div className="w-full">
            <p>เล่มที่</p>
            <input
              type="text"
              placeholder="รบกวนกรอกเป็นตัวเลขเท่านั้นนะ"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
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
