import Card from './Card';
import Img from '../assets/test.jpg';

function ForMap({ name, seeAll, src }) {
  return (
    <div className="">
      <div className="">
        <div>{name}</div>
        {seeAll && <div>ดูทั้งหมด</div>}
      </div>
      <div className="manga-list">
        <div className="manga-pic">
          <Card src={Img} MangaName={'KKFKFKFKFKFK'} />
        </div>
        <div className="manga-pic">
          <Card src={Img} MangaName={'HAAAAAAAAAAA'} />
        </div>
        <div className="manga-pic">
          <Card src={Img} MangaName={'HAAAAAAAAAAA'} />
        </div>
        <div className="manga-pic">
          <Card src={Img} MangaName={'HAAAAAAAAAAA'} />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default ForMap;
