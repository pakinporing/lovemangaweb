import axios from 'axios';
import React, { useState } from 'react';
import useLoading from '../../hooks/useLoading';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UpManga() {
  const { startLoading, stopLoading } = useLoading();
  const [file, setFile] = useState(null);
  const [mangaName, setMangaName] = useState('');
  const [des, setDes] = useState('');
  const navigate = useNavigate();
  const { mangaId } = useParams();

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const formData = new FormData();
      formData.append('mangaImageUrl', file);
      formData.append('mangaName', mangaName);
      formData.append('description', des);
      await axios.post('http://localhost:8888/manga', formData);
      stopLoading();
      toast.success('success login');
      navigate(`/adminpage`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
      stopLoading();
    }
  };

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
            <p>ชื่อมังงะ</p>
            <input
              type="text"
              placeholder="ชื่อมังงะ"
              value={mangaName}
              onChange={(e) => setMangaName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>คำอธิบาย</p>
            <textarea
              className="resize-none"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              id="w3review"
              name="w3review"
              rows="4"
              cols="35"
            ></textarea>
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
              onClick={handleClickSave}
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
