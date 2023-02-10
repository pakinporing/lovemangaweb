import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Read from '../components/Read';

import axios from 'axios';

export default function ReadPage() {
  const [search] = useSearchParams();

  const [manga, setManga] = useState({});

  const { mangaId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:8888/manga-chapter/${mangaId}?chapter=${search.get(
          'chapter'
        )}`
      );
      setManga(res.data.foundChapter);
      console.log(res.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <Header />
      <Read src={manga.url} />
      <Footer />
    </div>
  );
}
