import Card from './Card';

import { useEffect, useState } from 'react';
import axios from 'axios';

function ForMap({ name, seeAll, src }) {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8888/allManga/manga`);

      setManga(res.data.allManga);
    };
    fetch();
  }, []);

  // console.log(manga);

  return (
    <div className="flex justify-evenly flex-wrap">
      {manga.map((el) => {
        return (
          <Card
            mangaImg={el.mangaImageUrl}
            mangaName={el.mangaName}
            key={el.id}
            id={el.id}
          />
        );
      })}
    </div>
  );
}

export default ForMap;
