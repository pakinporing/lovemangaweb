import React from 'react';
import MangaList from '../components/admin/MangaList';
import UpChapter from '../components/admin/UpChapter';
import UpManga from '../components/admin/UpManga';
import ForMap from '../components/ForMap';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

import Slideshow from '../components/Slideshow';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Slideshow />
      <ForMap />
      {/* <MangaList /> */}
      {/* <UpManga /> */}
      {/* <UpChapter /> */}
      <Footer />
    </div>
  );
}
