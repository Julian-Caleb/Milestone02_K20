import Link from 'next/link';
import React, { Children } from 'react';


type Props = {
  children: React.ReactNode;
  onFilterClick1?: () => void;
  onFilterClick2?: () => void;
};

const HeaderUser = ({children,onFilterClick1,onFilterClick2}: Props) => {
  return (
    <header className="flex items-center justify-between bg-amber-900 p-5 shadow-md mb-2 shadow-opacity-70 custom-shadow">
      <div className="rounded-full w-16 h-16 bg-orange-400"></div>
      <div className="flex space-x-4">
        <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold focus:ring-2 focus:ring-red-500' onClick={onFilterClick1}>Sort by Alphabet</button>
        <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold focus:ring-2 focus:ring-red-500' onClick={onFilterClick2}>Sort by Date</button>
        <Link href='/'>
          <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold'>Home</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
