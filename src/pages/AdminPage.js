import React, { useEffect, useState } from 'react';

import MangaList from '../components/admin/MangaList';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import axios from 'axios';

export default function AdminPage() {
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
      <MangaList manga={manga} />
      <Footer />
    </div>
  );
}
