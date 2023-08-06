"use client"; // Mark the component as a client component

import React, { useState, useEffect } from 'react';
import Board from '@/components/Board/Board';
import BoardDetail from '@/components/Board/BoardDetail';
import HeaderUser from '@/components/HeaderUser';
import { DUMMY_INFORMATION } from '@/components/Information/Information';
import Image from 'next/image';

const User = () => {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(-1);

  const handleBoardClick = (index: number) => {
    setSelectedBoardIndex(index);
  };

  const handleCloseBoardDetail = () => {
    setSelectedBoardIndex(-1);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click occurred outside of the BoardDetail component
      const boardDetail = document.querySelector('.board-detail');
      if (boardDetail && !boardDetail.contains(event.target as Node)) {
        handleCloseBoardDetail();
      }
    };

    // Add click event listener when the BoardDetail is open
    if (selectedBoardIndex !== -1) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove click event listener when the component unmounts or BoardDetail is closed
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [selectedBoardIndex]);


  return (
    <>
      <HeaderUser />
      <div className="flex justify-center min-h-screen h-max min-w-screen">
        {selectedBoardIndex !== -1 && (
          <div className="z-50 w-max h-max flex items-center justify-center my-10 ">
            <BoardDetail
              title={DUMMY_INFORMATION[selectedBoardIndex].title}
              date={DUMMY_INFORMATION[selectedBoardIndex].date}
              content={DUMMY_INFORMATION[selectedBoardIndex].content}
              className="board-detail"
            />
          </div>
          )}
        <div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[64px] bold'>Board SPARTA 2022</h1>
            <div className="h-max w-[60vw] m-10 grid grid-cols-2 gap-10">
              {DUMMY_INFORMATION.map((info, index) => (
                <div key={index} onClick={() => handleBoardClick(index)}>
                  <Board title={info.title} />
                </div>
              ))}
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default User;
