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
          <AiOutlineFacebook />
        </div>
        <div>
          <AiOutlineInstagram />
        </div>
        <div>
          <AiOutlineTwitter />
        </div>
      </div>
      <div className="flex justify-center items-center">
        LoveManga Copyright 2023
      </div>
    </>
  );
}
