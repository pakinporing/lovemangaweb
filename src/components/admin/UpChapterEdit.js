import React, { useState } from 'react';
import useLoading from '../../hooks/useLoading';
import axios from 'axios';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UpChapter() {
  const [file, setFile] = useState(null);
  const [chapter, setChapter] = useState('');
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const { mangaId } = useParams();
  const [search] = useSearchParams();

  // console.log('55555555');
  // console.log(search.get('chapter'));
  // console.log('55555555');

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const formData = new FormData();
      formData.append('url', file);
      formData.append('chapter', chapter);

      await axios.patch(
        `http://localhost:8888/manga-chapter/${mangaId}?chapter=${search.get(
          'chapter'
        )}`,
        formData
      );

      toast.success('success patchhhhChapter');
      navigate(`/centerupmangapage/${mangaId}`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
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
