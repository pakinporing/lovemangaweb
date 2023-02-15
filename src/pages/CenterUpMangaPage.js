import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ChapTerList from '../components/ChapTerList';
import ImgManga from '../components/ImgManga';
import { useNavigate } from 'react-router-dom';

export default function CenterUpManga() {
  const [manga, setManga] = useState({});

  const { mangaId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8888/manga/${mangaId}`);
      setManga(...res.data.manga);
    };
    fetch();
  }, []);

  const handleDelect = async (e) => {
    try {
      e.preventDefault();
      await axios.delete(`http://localhost:8888/manga/${mangaId}`);
      toast.success('success delete');
      navigate(`/adminpage`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      {' '}
      <div>
        <br />
        <br />
        <br />
        <ImgManga
          src={manga.mangaImageUrl}
          manganame={manga.mangaName}
          mangades={manga.description}
        />
        <div className="flex items-center justify-center">
          <button
            className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#ff6600ee] text-[#ffffff]"
            onClick={handleDelect}
          >
            ลบมังงะ
          </button>
        </div>
        <br />
        <br />
        <div className="flex items-center justify-center">
          <button
            className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#86AED1] text-[#ffffff]"
            onClick={() => navigate(`/upchapterpage/${mangaId}`)}
          >
            เพิ่มตอน
          </button>
        </div>
        <ChapTerList mangaChapter={manga.MangaChapters} />
      </div>
    </>
  );
}
