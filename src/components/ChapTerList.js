import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChapTerList({ numberchapter = 0, mangaid }) {
  const chapterListData = Array.from(Array(numberchapter)).map(
    (_, index) => index
  );
  const navigate = useNavigate();
  console.log({ mangaid });

  return (
    <div className="flex flex-col items-center py-[32px] text-[32px]">
      {chapterListData.map((_, idx) => {
        return (
          <div
            onClick={(e) => {
              navigate(`/read/${mangaid}?chapter=${idx + 1}`);
            }}
          >
            ตอนที่{idx + 1}
          </div>
        );
      })}
    </div>
  );
}
