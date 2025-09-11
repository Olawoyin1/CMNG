import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
import { FiCamera } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import {
  
FaCheckCircle,
  FaCar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const RequestService = () => {
  const [formData, setFormData] = useState({
    registration: "",
    postcode: "",
    problem: "",
    description: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const problems = [
    "MOT Test",
    "Service",
    "Brakes",
    "Engine Issues",
    "Clutch",
    "Gearbox",
    "Suspension",
    "Electrical",
    "Bodywork/Dents",
    "Tyres",
    "Battery",
    "Air Conditioning",
    "Other",
  ];

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newImages].slice(0, 5)); // max 5 images
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise((r) => setTimeout(r, 1500));
      // Simple native feedback (no toast lib)
      alert("Request submitted! You'll receive quotes soon.");
      navigate("/quotes", {
        state: { requestData: { ...formData, images: images.length } },
      });
    } catch {
      alert("Failed to submit request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#3182ed]/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3182ed]/10 to-[#f97415]/10 rounded-3xl mb-8 shadow-lg">
            <FaCar className="h-10 w-10 text-[#3182ed]" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Request a Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your car and we'll connect you with trusted local mechanics in minutes
          </p>
        </div>

        {/* Form Container */}
        <div className="backdrop-blur-sm bg-card/60 border border-gray-300 rounded-3xl shadow-2xl shadow-[#3182ed]/10 overflow-hidden">
          <div className="bg-gradient-to-r from-[#3182ed]/10 via-[#3182ed]/5 to-[#f97415]/10 px-8 py-8 border-b border-gray-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#3182ed]/20 rounded-2xl flex items-center justify-center">
                <GiCheckMark className="h-6 w-6 text-[#3182ed]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Service Request Details</h2>
                <p className="text-muted-foreground">
                  Fill in the details below and we'll find the best mechanics for you
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Registration + Postcode */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label
                    htmlFor="registration"
                    className="text-base font-semibold flex items-center gap-2"
                  >
                    <FaCar className="h-4 w-4" />
                    Car Registration
                  </label>
                  <input
                    id="registration"
                    type="text"
                    placeholder="AB12 CDE"
                    value={formData.registration}
                    onChange={(e) =>
                      handleInputChange("registration", e.target.value.toUpperCase())
                    }
                    required
                    className="h-12 text-lg w-full rounded-md bg-background/50 border border-gray-300 px-3 focus:outline-none focus:ring-1 focus:ring-[#3182ed]/40"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="postcode"
                    className="text-base font-semibold flex items-center gap-2"
                  >
                    <FaMapMarkerAlt className="h-4 w-4" />
                    Your Postcode
                  </label>
                  <input
                    id="postcode"
                    type="text"
                    placeholder="SW1A 1AA"
                    value={formData.postcode}
                    onChange={(e) =>
                      handleInputChange("postcode", e.target.value.toUpperCase())
                    }
                    required
                    className="h-12 text-lg w-full rounded-md bg-background/50 border border-gray-300 px-3 focus:outline-none focus:ring-1 focus:ring-[#3182ed]/40"
                  />
                </div>
              </div>

              {/* Problem */}
              <div className="space-y-3">
                <label htmlFor="problem" className="text-base font-semibold">
                  What's the problem?
                </label>
                <select
                  id="problem"
                  value={formData.problem}
                  onChange={(e) => handleInputChange("problem", e.target.value)}
                  className="h-12 text-lg w-full rounded-md bg-background/50 border border-gray-300 px-3 focus:outline-none focus:ring-1 focus:ring-[#3182ed]/40"
                >
                  <option value="" disabled>
                    Select the type of service needed
                  </option>
                  {problems.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <label htmlFor="description" className="text-base font-semibold">
                  Describe the issue (optional)
                </label>
                <textarea
                  id="description"
                  placeholder="Provide more details about the problem, any symptoms, when it occurs, etc."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  className="min-h-[120px] text-base w-full rounded-md bg-background/50 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3182ed]/40 resize-none"
                />
              </div>

              {/* Image upload */}
              <div className="space-y-4">
                <span className="text-base font-semibold">Upload Photos (Optional but recommended)</span>
                <div className="relative group border-2 border-dashed border-[#3182ed]/20 bg-gradient-to-br from-[#3182ed]/5 to-[#f97415]/5 hover:border-[#3182ed]/40 transition-all duration-300 rounded-2xl p-8 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3182ed]/5 via-transparent to-[#f97415]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3182ed]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <FiCamera className="h-8 w-8 text-[#5a6c85]" />
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Upload photos of the issue to help mechanics provide accurate quotes
                    </p>

                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />

                    <label
                      htmlFor="image-upload"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-300 bg-white/80 hover:bg-white shadow-sm text-sm font-medium cursor-pointer transition"
                    >
                      <BsCloudUpload className="h-5 w-5 mr-2" />
                      Choose Images
                    </label>

                    <p className="text-sm text-muted-foreground mt-3">
                      Maximum 5 images, up to 10MB each
                    </p>
                  </div>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-28 object-cover rounded-xl border border-gray-300 shadow-md group-hover:shadow-lg transition-shadow"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 h-8 w-8 rounded-full p-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white leading-none"
                          aria-label="Remove image"
                          title="Remove image"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* What happens next */}
              <div className="bg-gradient-to-r from-[#f97415]/10 to-[#3182ed]/10 border border-[#3182ed]/20 p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#3182ed]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="h-5 w-5 text-[#3182ed]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3 text-lg">What happens next?</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#3182ed] rounded-full" />
                        We'll send your request to verified mechanics in your area
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#3182ed] rounded-full" />
                        You'll receive quotes within a few hours
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#3182ed] rounded-full" />
                        Compare prices and reviews to choose the best option
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#3182ed] rounded-full" />
                        Book directly with your chosen mechanic
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#3182ed] to-[#3182ed]/90 text-[#3182ed]-foreground shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-[#3182ed]-foreground border-t-transparent mr-3" />
                    Submitting Request...
                  </span>
                ) : (
                  "Get Quotes from Local Mechanics"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
