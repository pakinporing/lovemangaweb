import React from 'react';
import ImgManga from '../components/ImgManga';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Img from '../assets/test.jpg';
import ChapTerList from '../components/ChapTerList';

export default function MangaPage() {
  const manganame = 'Haikyuu!! ไฮคิว!! คู่ตบฟ้าประทาน';
  const mangades =
    'Haikyuu!! ไฮคิว!! คู่ตบฟ้าประทาน เรื่องราวของ ฮินาตะ โชโย เด็กหนุ่มผู้เริ่มต้นเล่นวอลเลย์บอลหลังจากที่ได้เห็น “สมอลล์ไจแอนท์” ที่กำลังแข่งขันวอลเลย์บอลอยู่ ในสมัยที่เขายังเรียนในระดับประถมศึกษา หลังจากนั้น ฮินาตะ ได้ทุ่มเทอย่างมากให้กับการเล่นวอลเลย์บอล จนเขาสามารถพาทีมโรงเรียนยูคิงาโอกะเข้าร่วมการแข่งขันวอลเลย์บอลเป็นครั้งแรก และครั้งสุดท้ายสำหรับเขาในสมัยเรียนชั้นมัธยมศึกษาตอนต้น';
  const chapter = 15;

  const mangaid = '15';

  return (
    <div>
      <Header />
      <ImgManga src={Img} manganame={manganame} mangades={mangades} />
      <ChapTerList numberchapter={chapter} mangaid={mangaid} />
      <Footer />
    </div>
  );
}
