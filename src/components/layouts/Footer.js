import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <AiOutlineFacebook className="text-[64px] text-[#FFBC90]" />
        </div>
        <div>
          <AiOutlineInstagram className="text-[64px] text-[#86AED1]" />
        </div>
        <div>
          <AiOutlineTwitter className="text-[64px] text-[#CFE555]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        LoveManga Copyright 2023
      </div>
    </>
  );
}
