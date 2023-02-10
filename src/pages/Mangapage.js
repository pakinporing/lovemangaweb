import React, { useEffect, useState } from 'react';
import ImgManga from '../components/ImgManga';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

import ChapTerList from '../components/ChapTerList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MangaPage() {
  const [manga, setManga] = useState({});

  const { mangaId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8888/manga/${mangaId}`);
      setManga(...res.data.manga);
    };
    fetch();
  }, []);

  return (
    <div>
      <Header />
      <ImgManga
        src={manga.mangaImageUrl}
        manganame={manga.mangaName}
        mangades={manga.description}
      />
      <ChapTerList mangaChapter={manga.MangaChapters} />
      <Footer />
    </div>
  );
}
