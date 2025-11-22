import React, { useState } from "react";
import Content1 from "./Content1";

const PageNavigation = () => {

  // Current visible page
  const [currentPage, setCurrentPage] = useState(1);

  // Track which pages are unlocked
  const [unlockedPages, setUnlockedPages] = useState([1]);

  // Total pages
  const totalPages = 4;

  // Page content (you can replace with real content)
  const pageContent = {
    1: <Content1/>,
    2: "Page 2's Content",
    3: "Page 3's Content",
    4: "Page 4's Content",
  };

  // When clicking "Mark as Read"
  const handleMarkAsRead = () => {
    const nextPage = currentPage + 1;
  
    // Only unlock next page (not navigate)
    if (nextPage <= totalPages && !unlockedPages.includes(nextPage)) {
      setUnlockedPages(prev => [...prev, nextPage]);
    }
  };
  
  

  return (
    <div className="">

      {/* PAGE CONTENT */}
      <div className="">
        {pageContent[currentPage]}
      </div>

      {/* MARK AS READ BUTTON */}
      <div className="mt-6">
        <button 
          onClick={handleMarkAsRead}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Mark as Read
        </button>
      </div>

      {/* PAGE NUMBER BUTTONS */}
      <div className="flex gap-6 justify-center mt-8">

        {[1, 2, 3, 4].map(number => {

          const isUnlocked = unlockedPages.includes(number);
          const isActive = number === currentPage;

          return (
            <button
              key={number}
              disabled={!isUnlocked}
              onClick={() => isUnlocked && setCurrentPage(number)}
              
              className={`px-4 py-2 rounded-full text-white text-lg 
                ${isActive ? "bg-blue-700" : "bg-gray-500"} 
                ${!isUnlocked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {number}
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default PageNavigation;
