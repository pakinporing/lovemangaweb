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
    <div className="">
      <div className="">
        <div>{name}</div>
        {seeAll && <div>ดูทั้งหมด</div>}
      </div>
      <div className="manga-list" role="button">
        {manga.map((el) => {
          return (
            <Card
              onClick={() => {
                navigate(`/mangapage`);
              }}
              mangaImg={el.mangaImageUrl}
              mangaName={el.mangaName}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ForMap;
