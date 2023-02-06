import React from 'react';
import img from '../assets/Allmanga.png';
import Card from './Card';

export default function AllManga() {
  return (
    <div>
      <div className="flex flex-col items-center p-[40px]">
        <img src={img} />
        <div className="w-[995px] h-[2126px] bg-white rounded-[30px] p-[40px] shadow-sm">
          <p>ขังดวลแข้ง</p>
        </div>
      </div>
    </div>
  );
}
