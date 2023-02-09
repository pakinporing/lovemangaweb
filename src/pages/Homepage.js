import React from 'react';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import MangaType from '../components/MangaType';
import Slideshow from '../components/Slideshow';

export default function HomePage() {
  return (
    <div>
      <Header />
      <MangaType />
      <Footer />
    </div>
  );
}
