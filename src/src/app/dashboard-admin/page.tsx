import HeaderAdmin from '@/components/HeaderAdmin'
import React from 'react'

const DashboardAdmin = () => {
  return (
    <>
        <HeaderAdmin />
        <div className="min-h-screen h-max min-w-screen">
          <div className="h-[400px] w-[400px] bg-[#E7B10A] rounded-br-full">
            <h2 className="h-auto w-[337px] text-[64px] p-6">Welcome, User123!</h2>
          </div>
        </div>
    </>
  )
}

export default DashboardAdmin