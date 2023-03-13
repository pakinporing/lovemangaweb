import { useNavigate } from 'react-router-dom';

export default function ChapTerList({ mangaChapter }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-[32px] text-[32px]">
      {mangaChapter?.map((el) => {
        return (
          <div>
            {' '}
            <div
              role="button"
              key={el.id}
              onClick={() => {
                navigate(`/upchaptereditpage/${el.mangaId}?chapter=${el.id}`);
              }}
            >
              เล่มที่{el.chapter} กดแก้ไข
            </div>
          </div>
        );
      })}
    </div>
  );
}
