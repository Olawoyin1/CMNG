


import { useState } from "react";
import { Link } from "react-router-dom";
import { JOBS } from "./Data";
import type { JobType } from "../types/Job";

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const JobBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    "All Categories",
    "Programming",
    "Design",
    "Marketing",
    "Writing",
    "Customer Service",
    "Sales",
    "Finance",
    "Human Resources",
  ];

  // Format date like "Posted on Wed 10th Sep, 2025"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return (
    "Posted on " +
    date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  );
};


  const states = ["Lagos", "Abuja", "Port Harcourt"];
  const types = ["Remote", "Hybrid", "On-site"];

  const filteredJobs = JOBS.filter((job: JobType) => {
    const categoryMatch =
      selectedCategory === "All Categories" || job.category === selectedCategory;
    const stateMatch =
      selectedStates.length === 0 || selectedStates.includes(job.state);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(job.type);
    return categoryMatch && stateMatch && typeMatch;
  });

  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Mobile filter toggle */}
       

        {/* Sidebar */}
        <aside
  className={`fixed top-0 left-0 h-screen w-[300px] bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:sticky md:top-10 md:h-fit md:w-auto md:translate-x-0 md:block md:rounded`}
>
           <div className="bg-[#282261] text-white text-center px-4 py-2    ">

            <h3 className="font-bold">Filters</h3>
           </div>

           <div className="p-6">

          

          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-700">Category</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="text-sm md:text-base flex items-center gap-2 text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="accent-[#F25A29]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* States */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-700">State</h4>
            <div className="space-y-2">
              {states.map((state) => (
                <label
                  key={state}
                  className="text-sm md:text-base flex items-center gap-2 text-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={state}
                    checked={selectedStates.includes(state)}
                    onChange={(e) =>
                      setSelectedStates((prev) =>
                        e.target.checked
                          ? [...prev, state]
                          : prev.filter((s) => s !== state)
                      )
                    }
                    className="accent-[#F25A29]"
                  />
                  {state}
                </label>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Job Type</h4>
            <div className="space-y-2">
              {types.map((type) => (
                <label
                  key={type}
                  className="text-sm md:text-base  flex items-center gap-2 text-gray-600  cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={(e) =>
                      setSelectedTypes((prev) =>
                        e.target.checked
                          ? [...prev, type]
                          : prev.filter((t) => t !== type)
                      )
                    }
                    className="accent-[#F25A29]"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

           </div>
            {/* Mobile footer buttons */}
  <div className="flex justify-between items-center px-6 py-3 border-t border-gray-200 mt-2 md:hidden">
    <button
      onClick={() => {
        setSelectedCategory("All Categories");
        setSelectedStates([]);
        setSelectedTypes([]);
      }}
      className="text-sm font-medium"
    >
      Reset Filter
    </button>

    <button
      onClick={() => setIsSidebarOpen(false)}
      className="text-sm font-medium text-gray-600 hover:text-gray-900"
    >
      Close ✕
    </button>
  </div>
           
        </aside>

        {/* Job Listings */}
        <main className="md:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">Job Listings</h2>
             <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex md:hidden  bg-[#282261] text-sm text-white px-4 py-2 rounded"
            >
              {isSidebarOpen ? "Close Filters" : "Open Filters"}
            </button>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid gap-2">
              {filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="bg-white rounded border border-gray-200  p-4  transition"
                >
                  <h3 className="text-[17px] md:text-xl leading-5 font-bold text-gray-800 mb-2">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-[#282261] hover:underline transition"
                    >
                      {job.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#F25A29] mb-3">
                    {/* Date posted: {job.date} */}
                    {formatDate(job.date)}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateText(job.description, 30)}... <Link
                    to={`/job-details`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                  </p>
                  
                </article>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No jobs match your filters.</p>
          )}
        </main>
      </div>
    </section>
  );
};

export default JobBoard;
