import Card from './Card';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForMap({ name, seeAll, src }) {
  const [manga, setManga] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8888/allManga/manga`);

      setManga(res.data.allManga);
    };
    fetch();
  }, []);

  // console.log(manga);

  return (
    <div className="flex">
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
