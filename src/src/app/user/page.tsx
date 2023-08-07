"use client"; // Mark the component as a client component

import React, { useState, useEffect } from 'react';
import Board from '@/components/Board/Board';
import BoardDetail from '@/components/Board/BoardDetail';
import HeaderUser from '@/components/HeaderUser';
import { DUMMY_INFORMATION } from '@/components/Information/Information';
import Image from 'next/image';

const User = () => {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(-1);
  const [sortedMessages, setSortedMessages] = useState(DUMMY_INFORMATION.slice());
  const [isSorted, setIsSorted] = useState(false); // Track whether messages are sorted or not

  const handleBoardClick = (index: number) => {
    setSelectedBoardIndex(index);
  };

  const handleCloseBoardDetail = () => {
    setSelectedBoardIndex(-1);
  };
  const handleSortAlphabetically = () => {
    if (isSorted) {
      setSortedMessages(DUMMY_INFORMATION.slice()); // Revert to the original order
    } else {
      const sorted = sortedMessages.slice().sort((a, b) => a.title.localeCompare(b.title));
      setSortedMessages(sorted);
    }
    setIsSorted(!isSorted); // Toggle the sorted state
    
  };
  // make me a bubble sort

  const handleSortDate = () => {
    const sorted = sortedMessages.slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setSortedMessages(sorted);

}
  

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
      <HeaderUser onFilterClick1={handleSortAlphabetically} onFilterClick2={handleSortDate}>
      </HeaderUser>
      
      <div className="flex justify-center min-h-screen h-max min-w-screen">
        {selectedBoardIndex !== -1 && (
          <div className="z-50 w-max h-max flex items-center justify-center my-10 ">
            <BoardDetail
              title={sortedMessages[selectedBoardIndex].title}
              date={sortedMessages[selectedBoardIndex].date}
              content={sortedMessages[selectedBoardIndex].content}
              className="board-detail"
            />
          </div>
          )}
        <div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[64px] bold'>Board SPARTA 2022</h1>
            <div className="h-max w-[60vw] m-10 grid grid-cols-2 gap-10">
              {sortedMessages.map((info, index) => (
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
