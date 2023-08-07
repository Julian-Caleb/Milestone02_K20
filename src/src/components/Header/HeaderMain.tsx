import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HeaderMain = (props: Props) => {
  return (
    <header className = "flex items-center justify-between bg-amber-900 p-5 shadow-md mb-2 shadow-opacity-70 custom-shadow">
        <Image src='/images/synctr.png' alt='' width={60} height={60}/>
        <div className='flex space-x-4'>
            <Link href='/user'>
              <button className='px-4 py-2 border rounded-full border-gray-400 bg-orange-400 font-bold'>Informations</button>
            </Link>
        </div>
    </header>

  )
}

export default HeaderMain