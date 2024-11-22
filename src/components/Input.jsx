import React from 'react';
import { Search } from '../assets/icons/icons';

const SearchInput = () => {
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search/>
        </div>
        <input
          className="block w-full pl-10 pr-3 py-2 border border-[#D9D9D9] rounded-md leading-5 bg-white placeholder-[#A0AEC0] focus:outline-none focus:placeholder-[#A0AEC0] focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search..."
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchInput;