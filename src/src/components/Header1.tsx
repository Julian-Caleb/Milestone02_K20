import Link from 'next/link'
import React from 'react'


type Props = {}

const Header1 = (props: Props) => {
  return (
    <header className = "flex items-center justify-between bg-amber-900 p-5 shadow-md mb-2 shadow-opacity-70 custom-shadow">
        <div className="rounded-full w-16 h-16 bg-orange-400">
        </div>
        <div className='flex space-x-4'>
            {/* <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold'>login</button>  */}
            {/* <button className='px-4 py-2 border rounded-full border-gray-400 bg-white font-bold'>sign up</button>   */}
            <Link href='/user'>
              <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold'>Informations</button>
            </Link>
        </div>
    </header>

  )
}

export default Header1