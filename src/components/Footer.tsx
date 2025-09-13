// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#121B1D] text-white/80 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Logo & About */}
//         <div>
//           <div className="flex items-center space-x-2 mb-4">
//             <img src="../../Image/logo.png" alt="logo" className="w-8" />
//             <h4 className="text-xl font-extrabold text-white">
//               areermatters<span className="text-[#F25A29]">NG</span>
//             </h4>
//           </div>
//           <p className="text-sm text-white/60">
//             Connecting talent with opportunities across Nigeria. Find your dream job or hire the best candidates with ease.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h5 className="font-semibold text-white mb-4">Quick Links</h5>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/" className="hover:text-[#F25A29] transition">Home</Link></li>
//             <li><Link to="http://amazincareersng.com/services" className="hover:text-[#F25A29] transition">Services</Link></li>
//             <li><Link to="http://amazincareersng.com/post-job" className="hover:text-[#F25A29] transition">Post Job</Link></li>
//             <li><Link to="http://amazincareersng.com/contact" className="hover:text-[#F25A29] transition">Contact</Link></li>
//             <li><Link to="http://amazincareersng.com/blog-posts" className="hover:text-[#F25A29] transition">Blog</Link></li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h5 className="font-semibold text-white mb-4">Categories</h5>
//           <ul className="space-y-2 text-sm">
//             <li>Programming</li>
//             <li>Design</li>
//             <li>Marketing</li>
//             <li>Writing</li>
//             <li>Customer Service</li>
//             <li>Sales</li>
//             <li>Finance</li>
//             <li>Human Resources</li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h5 className="font-semibold text-white mb-4">Follow Us</h5>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-[#F25A29]"><FaFacebook size={20} /></a>
//             <a href="#" className="hover:text-[#F25A29]"><FaTwitter size={20} /></a>
//             <a href="#" className="hover:text-[#F25A29]"><FaLinkedin size={20} /></a>
//             <a href="#" className="hover:text-[#F25A29]"><FaInstagram size={20} /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-white/60">
//         © {new Date().getFullYear()} CareermattersNG. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center ">
            <img src="../../Image/logo.png" alt="logo" className="w-8" />
            <h4 className="text-xl font-extrabold text-gray-800">
              areermatters<span className="text-[#F25A29]">NG</span>
            </h4>
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center space-x-6 mb-6 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-[#F25A29]">Home</Link></li>
          <li><Link to="http://amazincareersng.com/services" className="hover:text-[#F25A29]">Services</Link></li>
          <li><Link to="http://amazincareersng.com/post-job" className="hover:text-[#F25A29]">Post Job</Link></li>
          <li><Link to="http://amazincareersng.com/contact" className="hover:text-[#F25A29]">Contact</Link></li>
          <li><Link to="http://amazincareersng.com/blog-posts" className="hover:text-[#F25A29]">Blog</Link></li>
        </ul>

        {/* Socials */}
        <div className="flex justify-center space-x-5 mb-6">
          <a href="#" className="text-gray-500 hover:text-[#F25A29] transition"><FaFacebook size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-[#F25A29] transition"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-[#F25A29] transition"><FaLinkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-[#F25A29] transition"><FaInstagram size={20} /></a>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CareermattersNG. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
