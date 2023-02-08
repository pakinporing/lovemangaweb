import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ChapTerList({ numberchapter = 0, mangaid }) {
  const chapterListData = Array.from(Array(numberchapter)).map(
    (_, index) => index
  );
  const navigate = useNavigate();
  console.log({ mangaid });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const param = query.get('param');

  console.log(query);
  console.log(param);

  useEffect(async () => {
    const manga = await axios.get(
      `http://localhost:8888/manga-chapter/${param.mangaid}?chapter=${query}`
    );
    console.log(manga);
  });

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
