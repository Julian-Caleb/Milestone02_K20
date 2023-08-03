import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <div className='w-full h-[45px] bg-black flex justify-around items-center fixed'>
            <p className='bold text-white text-[30px]'>Testing</p>
            <p className='bold text-white text-[30px]'>Testing</p>
        </div>
    </>
  )
}

export default Navbar