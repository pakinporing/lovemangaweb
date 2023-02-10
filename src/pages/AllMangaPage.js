import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllManga from '../components/AllManga';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

export default function AllMangaPage() {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8888/allManga/manga`);

      setManga(res.data.allManga);
    };
    fetch();
  }, []);

  return (
    <div>
      <Header />
      <AllManga manga={manga} />
      <Footer />
    </div>
  );
}
