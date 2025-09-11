


import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="min-h-[90px] flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl font-bold flex items-end ">
              <img src="../../Image/logo.png" alt="" className="w-8" />
              <h4 className="text-xl -ml-2 font-extrabold text-[#282261]">
                areermatters<span className="text-[#F25A29]">NG</span>
              </h4>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow items-center">
            <ul className="flex ml-auto space-x-6">
              <li>
                <Link
                  to="/"
                  className="px-2 text-black/50 hover:text-black transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-2 text-black/50 hover:text-black transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-2 text-black/50 hover:text-black transition"
                >
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-2 text-black/50 hover:text-black transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-2 text-black/50 hover:text-black transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#282261]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 text-[#282261] font-medium">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="http://amazincareersng.com/services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="http://amazincareersng.com/post-job"
                  onClick={() => setMenuOpen(false)}
                >
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="http://amazincareersng.com/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="http://amazincareersng.com/blog-posts"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
