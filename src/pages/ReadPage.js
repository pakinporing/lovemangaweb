import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Read from '../components/Read';
import TestSrc from '../assets/content/Group5.png';

export default function ReadPage() {
  const [search] = useSearchParams();
  console.log(search.get('chapter'));

  const params = useParams();
  console.log(params);

  const testimg = TestSrc;

  return (
    <div>
      <Header />
      <Read src={testimg} />
      <Footer />
    </div>
  );
}
