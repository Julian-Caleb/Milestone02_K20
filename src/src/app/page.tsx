import HeaderMain from '@/components/Header/HeaderMain'

export default function Home() {
  return (
    <>
      <HeaderMain />
      <section className="flex items-center justify-around h-[838px] overflow-y-hidden ">
        <div className="w-[620px] h-[620px] rounded-[50%] drop-shadow-[18px_13px_5px_0px_#4C4B16] bg-[#E7B10A] flex flex-col justify-center items-center">
          <h1 className="text-[128px]">sync.tr</h1>
          <h3 className="text-[28px]">secure board management system</h3>
        </div>
      </section>
    </>
  )
}
