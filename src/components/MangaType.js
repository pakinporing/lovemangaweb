import React from 'react';
import ForMap from './ForMap';

export default function MangaType() {
  const mangaType = [
    {
      name: 'ยอดนิยม',
      seeAll: false
    },
    {
      name: 'กีฬา',
      seeAll: true
    },
    {
      name: 'ตลก',
      seeAll: true
    },
    {
      name: 'ต่อสู้',
      seeAll: true
    },
    {
      name: 'แฟนตาซี',
      seeAll: true
    }
  ];
  return (
    <div>
      {' '}
      {mangaType.map((el) => {
        return (
          <ForMap name={el.name} seeAll={el.seeAll} firstPic={el.firstPic} />
        );
      })}
    </div>
  );
}
