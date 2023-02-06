import React from 'react';
import AllManga from '../components/AllManga';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

export default function AllMangaPage() {
  return (
    <div>
      <Header />
      <AllManga />
      <Footer />
    </div>
  );
}
