import { useState } from "react";
// import { Link } from "react-router-dom";
import { MapPin, Flag, Building, Globe, Share2 } from "lucide-react";
// import { CiCalendar } from "react-icons/ci";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
// import { TfiTimer } from "react-icons/tfi";

// Mock job data (in a real app, you would fetch this based on the ID)
const jobData = {
  id: "1",
  title: "Senior React Developer",
  company: "TechNova Solutions",
  logo: "",
  location: "Lagos",
  type: "Remote",
  category: "Programming",
  jobType: "Freelance",
  salary: "₦500,000 - ₦800,000",
  postedAt: "2 days ago",
  description: `
    TechNova Solutions is looking for a Senior React Developer to join our growing team. The ideal candidate will have extensive experience in building high-performance, scalable web applications using React and its ecosystem. 

    As a Senior React Developer, you will be responsible for developing and implementing user interface components using React.js best practices. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase. 

    TechNova Solutions is looking for a Senior React Developer to join our growing team. The ideal candidate will have extensive experience in building high-performance, scalable web applications using React and its ecosystem.

    As a Senior React Developer, you will be responsible for developing and implementing user interface components using React.js best practices. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.


  `,
  method: "Interested and qualified candidates should send their CV and Cover Letter to <b>careers@careermatters.com</b> using the Job Title as the subject of the email. Alternatively, you can apply directly through the provided application link if available. Only shortlisted candidates will be contacted.",
  resonsibility: [
 " Develop and maintain responsive, user-friendly web applications using React.js and modern JavaScript.",
"Collaborate with designers, product managers, and backend developers to deliver high-quality features.",
"Optimize applications for maximum performance, speed, and scalability.",
"Implement clean, maintainable, and reusable code following best practices.",
"Conduct code reviews, provide feedback, and ensure adherence to coding standards.",
"Stay up to date with emerging frontend technologies and contribute ideas for improvement.",
"Debug, troubleshoot, and fix issues across various browsers and devices.",
"Integrate APIs and work closely with backend teams for seamless data flow.",
"Participate in Agile/Scrum ceremonies, including sprint planning and retrospectives.",
"Ensure accessibility, security, and compliance standards in all web solutions."
  ],
  companyInfo: {
    name: "TechNova Solutions",
    description: "TechNova Solutions is a leading tech company in Nigeria, specializing in web and mobile application development, UI/UX design, and digital transformation. We work with clients across various sectors including fintech, e-commerce, and healthcare.",
    size: "50-100 employees",
    website: "https://technovasolutions.ng",
    location: "Lagos, Nigeria",
    founded: "2015"
  },
  skills: ["React.js", "JavaScript", "TypeScript", "Redux", "HTML5", "CSS3", "REST APIs", "Git"],
  applicationDeadline: "30 May 2025"
};



const JobDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = () => navigator.clipboard.writeText(window.location.href);

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 md:py-8 ">
         {/* Main content */}
      <div className="max-w-7xl  md:px-0 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <div className="bg-white md:rounded md:shadow p-4">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mr-4">
                    {jobData.logo ? (
                      <img src={jobData.logo} alt={`${jobData.company} logo`} className="h-full w-full object-cover" />
                    ) : (
                      <Building className="h-5 w-5 text-gray-400" />
                    )}
                  </div>

                  <div>
                    <h1 className=" md:text-lg font-bold text-[#282261] mb-1">
                      {jobData.title}
                    </h1>
                    <p className="text-xs md:text-sm text-[#282261]">{jobData.company}</p>
                  </div>
                  
                </div>
                  <div className="flex-1">
                    
                    <div className="flex flex-wrap gap-3 text-sm text-[#282261]">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{jobData.location}</span>
                      </div>
                      <div className="flex items-center">
                        {/* <DollarSign size={16} className="mr-1" /> */}
                        <span>{jobData.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <MdOutlineCalendarToday size={16} className="mr-1" />
                        <span>Posted {jobData.postedAt}</span>
                      </div>
                    </div>
                  </div>
                
                <div className="flex mt-3 flex-wrap gap-3">
                  <button 
                    className="bg-[#ee774f] p-2 text-white text-sm px-8 rounded hover:bg-careersng-purple-dark"
                    
                    onClick={() => setShowModal(true)}
                  >
                    Apply Now
                  </button>
                  
                  
                  <button  onClick={handleShare} className="flex items-center border px-8 border-gray-500 rounded p-2">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </button>
                </div>
          </div>

          {/* Job description */}
          <div className="bg-white md:rounded md:shadow p-4">
            <h2 className="text-lg font-bold mb-0 text-[#282261]">Job Description</h2>
            {/* <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: jobData.description }} /> */}
            <div
  className="text-[#282261] font-medium text-sm whitespace-pre-line"
  dangerouslySetInnerHTML={{ __html: jobData.description.replace(/\n/g, "<br />") }}
/>

            <h2 className="text-lg font-semibold my-3 text-[#282261]">Responsibilty</h2>
            <ul className="text-[#282261] font-medium text-sm list-disc pl-6 space-y-1">
  {jobData.resonsibility.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

            <h2 className="text-lg font-semibold mt-8 mb-3 text-[#282261]">Method Of Application</h2>
            <div className="text-[#282261] font-medium text-sm" dangerouslySetInnerHTML={{ __html: jobData.method }} />
          </div>

          



          {/* Application CTA */}
          {/* <div className="flex items-center bg-white justify-center flex-col rounded-xl shadow p-6 text-center">
                <h2 className="text-xl font-semibold text-careersng-navy mb-2">Ready to Apply?</h2>
                <p className="text-gray-600 mb-4">Submit your proposal before the deadline: {jobData.applicationDeadline}</p>
                <button 
                  className="bg-[#ee774f] text-white p-2 px-4 rounded text-sm flex items-center border-1 hover:bg-careersng-purple-dark"
                  onClick={() => setShowModal(true)}
                >
                  Submit Your Proposal 
                  <Send size={16} className="ml-2" />
                </button>
          </div> */}
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <div className="bg-white md:rounded md:shadow p-4">
                <h2 className="text-xl font-semibold text-[#282261] mb-4">Company Information</h2>
                
                <div className="space-y-4">
                  <p className="text-[#282261] font-medium text-sm">{jobData.companyInfo.description}</p>
                  
                  <div className="space-y-2">
                    
                    
                    <div className="flex items-start">
                      <Globe size={16} className="mr-2 mt-1 text-[#F25A29]" />
                      <div>
                        <span className="text-sm text-gray-500 block">Website</span>
                        <a 
                          href={jobData.companyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-careersng-purple hover:text-careersng-purple-dark"
                        >
                          {jobData.companyInfo.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={16} className="mr-2 mt-1 text-[#F25A29]" />
                      <div>
                        <span className="text-sm text-gray-500 block">Location</span>
                        <span className="font-medium">{jobData.companyInfo.location}</span>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
          </div>


            {/* Job Overview */}
            <div className="bg-white md:rounded md:shadow p-4">
                <h2 className="text-lg font-semibold text-[#282261] mb-4">Job Overview</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MdOutlineCalendarToday size={16} className="mr-2 mt-1 text-[#F25A29]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Application Deadline</span>
                      <span className="font-medium">{jobData.applicationDeadline}</span>
                    </div>
                  </div>
                  
                  
                  
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 text-[#F25A29]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Location</span>
                      <span className="font-medium">{jobData.location} ({jobData.type})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TbCurrencyNaira size={16} className="mr-2 mt-1 text-[#F25A29]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Salary Range</span>
                      <span className="font-medium">{jobData.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <LuCalendarClock size={16} className="mr-2 mt-1 text-[#F25A29]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Posted</span>
                      <span className="font-medium">{jobData.postedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Report This Job */}
              <div className="text-center p-4">
                <button className="text-gray-500 hover:text-red-500 flex items-center justify-center mx-auto">
                  <Flag size={16} className="mr-2" />
                  Report this job
                </button>
              </div>


        </div>

      </div>

      {/* Apply Modal */}
      {showModal && (
        <div className="fixed p-3 inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-4 py-7 sm:p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Submit Your Application</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Cover Letter</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#ee774f]"
                  placeholder="Write your cover letter..."
                />
              </div>

            


<div>
      <label className="block mb-1 text-sm font-medium">Attach File</label>
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#ee774f] transition">
      <IoCloudUploadOutline size={20} />
        {fileName ? (
          <p className="text-sm text-gray-700">{fileName}</p>
        ) : (
          <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
        )}
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>


              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#ee774f] text-white rounded hover:bg-blue-900 text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;