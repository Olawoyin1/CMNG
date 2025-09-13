
import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";


interface SearchBarProps {
  onSearch?: (query: {
    keyword: string;
    location: string;
  }) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        keyword,
        location,
      });
    }
  };

  return (
    <>
     <h1 className="text-xl lg:text-3xl text-center text-[#282261] font-extrabold leading-tight mt-3 md:mb-3">
              Find Remote, Freelance & Internship <br className="" />
              <span className="text-[#F25A29]">Jobs in Nigeria</span>
            </h1>
    
    <form 
      onSubmit={handleSubmit} 
      className={`w-full p-4 sm:p-5 ${className}`}
    >
      <div className="max-w-4xl mx-auto grid bg-white/9  items-center  md:p-0 grid-cols-1 md:grid-cols-5 gap-4">
        {/* Keyword Input */}
        <div className="relative md:col-span-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiSearch2Line size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Job title or keyword"
            className="pl-10 w-full  border-0 border-b  focus:border-[#ed9172] focus:outline-none py-2 transition-all duration-200"
          />
        </div>

        {/* Location Input */}
        <div className="relative md:col-span-2 hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <GoLocation size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (city or remote)"
            className="pl-10 w-full   border-0 border-b  focus:border-[#ed9172] focus:outline-none py-2 transition-all duration-200"
          />
        </div>

        <div className=" w-full m-0 border-2">
            <button 
            type="submit" 
            className="w-full text-sm  bg-[#282261] text-white md:max-w-[200px] py-2 cursor-pointer font-medium"
            >
            Search Jobs
            </button>
        </div>

       


        
      </div>
    </form>
    </>
  );
};

export default SearchBar;