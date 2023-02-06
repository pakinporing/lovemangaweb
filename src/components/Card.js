import React from 'react';

export default function Card({ src }) {
  return (
    <div className="w-[220px] h-[309px]">
      <div className="border border-black w-[220px] h-[309px] rounded-[10px] mx-auto overflow-hidden">
        <div>
          <img src={src} />
        </div>
      </div>
      <div>Manga Name</div>
    </div>
  );
}
