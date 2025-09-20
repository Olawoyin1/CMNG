import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { SlBriefcase } from "react-icons/sl";
import TiptapEditor from "../components/TiptapEditor";
import { useState } from "react";

const nigerianStates = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa",
  "Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger",
  "Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"
];

const PostJob = () => {

  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      location: "",
      category: "",
      salary: "",
      description: "",
      jobType: "",
      experienceLevel: "",
      methodOfApplication: "",
      applicationLink: "",
      applicationEmail: "",
      deadline: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      company: Yup.string().required("Company name is required"),
      location: Yup.string().required("Location is required"),
      category: Yup.string().required("Category is required"),
      salary: Yup.string().required("Salary range is required"),
      description: Yup.string().required("Description is required"),
      jobType: Yup.string().required("Job type is required"),
      experienceLevel: Yup.string().required("Experience level is required"),
      methodOfApplication: Yup.string().required("Method of application is required"),
      applicationLink: Yup.string().url("Must be a valid URL").nullable(),
      applicationEmail: Yup.string().email("Must be a valid email").nullable(),
      deadline: Yup.date().required("Application deadline is required"),
    }),
    onSubmit: (values) => {
      console.log("Job Posted:", values);
      navigate("/jobs");
    },
  });

  return (
    <div className="flex flex-col">
      <main className="flex-1 bg-gray-50">
        <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-5">
          {/* Left Image */}
          <div className="col-span-2 hidden lg:flex">
            <img
              src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600"
              alt="Job Post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="col-span-3 flex flex-col items-center justify-center py-7 lg:p-7">
            <div className=" w-full p-4 bg-white rounded-xl">
              <div className="flex items-center gap-2">
                <SlBriefcase size={20} className="text-blue-900" />
                <h1 className="text-xl font-bold text-blue-900 mb-1">
                  Post A New Job
                </h1>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Fill out the details below to post a new job listing.
              </p>

              <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Title + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Senior React Developer"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("title")}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <div className="text-red-700 text-xs">{formik.errors.title}</div>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TechCorp Nigeria"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("company")}
                    />
                    {formik.touched.company && formik.errors.company && (
                      <div className="text-red-700 text-xs">{formik.errors.company}</div>
                    )}
                  </div>
                </div>

                {/* Location + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <select
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("location")}
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {formik.touched.location && formik.errors.location && (
                      <div className="text-red-700 text-xs">{formik.errors.location}</div>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Development"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("category")}
                    />
                    {formik.touched.category && formik.errors.category && (
                      <div className="text-red-700 text-xs">{formik.errors.category}</div>
                    )}
                  </div>
                </div>

                {/* Job Type + Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Type
                    </label>
                    <select
                      
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("jobType")}
                    >
                      <option value="">Select Job Type</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                    {formik.touched.jobType && formik.errors.jobType && (
                      <div className="text-red-700 text-xs">{formik.errors.jobType}</div>
                    )}
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience Level
                    </label>
                    <select
                     
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("experienceLevel")}
                    >
                      <option value="">Select Experience Level</option>
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior Level</option>
                    </select>
                    {formik.touched.experienceLevel &&
                      formik.errors.experienceLevel && (
                        <div className="text-red-700 text-xs">
                          {formik.errors.experienceLevel}
                        </div>
                      )}
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary Range
                  </label>
                  <input
                   
                    type="text"
                    placeholder="₦500,000 - ₦800,000"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    {...formik.getFieldProps("salary")}
                  />
                  {formik.touched.salary && formik.errors.salary && (
                    <div className="text-red-700 text-xs">{formik.errors.salary}</div>
                  )}
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>
                

                <TiptapEditor value={content} onChange={setContent} />
                </div>

                {/* Method of Application */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Method of Application
                  </label>
                  <textarea
                    
                    placeholder="e.g. Send CV and cover letter to hr@company.com"
                    className="block w-full min-h-[100px] p-2 border border-gray-300 rounded-md"
                    {...formik.getFieldProps("methodOfApplication")}
                  />
                  {formik.touched.methodOfApplication &&
                    formik.errors.methodOfApplication && (
                      <div className="text-red-700 text-xs">
                        {formik.errors.methodOfApplication}
                      </div>
                    )}
                </div>

                {/* Application Link + Email + Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Application Link */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Application Link
                    </label>
                    <input
                      
                      type="url"
                      placeholder="https://company.com/apply"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("applicationLink")}
                    />
                    {formik.touched.applicationLink &&
                      formik.errors.applicationLink && (
                        <div className="text-red-700 text-xs">
                          {formik.errors.applicationLink}
                        </div>
                      )}
                  </div>

             

                  {/* Deadline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Application Deadline
                    </label>
                    <input
                     
                      type="date"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      {...formik.getFieldProps("deadline")}
                    />
                    {formik.touched.deadline && formik.errors.deadline && (
                      <div className="text-red-700 text-xs">
                        {formik.errors.deadline}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="border border-gray-300 border border-gray-300-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="bg-[#ee774f] text-white text-sm px-6 py-2 rounded-md hover:bg-blue-900"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
