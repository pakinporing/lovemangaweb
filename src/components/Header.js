import React from 'react';

export default function Header() {
  return (
    <div className="flex">
      <h1>LoveManga</h1>
      <p>มังงะทั้งหมด</p>
      <div>
        <div className="border border-black rounded flex justify-between">
          <input type="text" placeholder="search"></input>
          <p>oooo</p>
        </div>
      </div>
    </div>
  );
}
