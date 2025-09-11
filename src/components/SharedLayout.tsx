// Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default SharedLayout;
