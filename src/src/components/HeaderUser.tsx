import React from 'react';

type Props = {};

const HeaderUser = (props: Props) => {
  return (
    <header className="flex items-center justify-between bg-amber-900 p-5 shadow-md mb-2 shadow-opacity-70 custom-shadow">
      <div className="rounded-full w-16 h-16 bg-orange-400"></div>

      <div className="flex space-x-4">
        <div className="relative">
          {/** Search button input*/}
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 rounded-full border border-orange-400 bg-amber-900 text-orange-400 font-bold focus:outline-none focus:ring focus:border-blue-300 placeholder-orange-400"
          />
        </div>
        <button className="px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold">
          Filter
        </button>
      </div>
    </header>
  );
};

export default HeaderUser;
