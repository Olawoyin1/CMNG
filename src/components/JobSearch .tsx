

const JobSearch = () => {
  return (
    <section className="w-full py-9 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Search Form */}
        <form className="flex flex-col md:flex-row items-center gap-4">
          {/* Job Search Input */}
          <input
            type="text"
            placeholder="Search for preferred job"
            className="w-full flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="w-full flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="w-full cursor-pointer md:w-auto bg-[#282261] text-white px-9 py-3 rounded hover:bg-blue-900 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobSearch;
