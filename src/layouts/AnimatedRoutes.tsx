// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../pages/Home";
import About from "../pages/About";
import PageWrapper from "../components/PageWrapper";
import RequestService from "../pages/RequestService";
import SharedLayout from "../components/SharedLayout";
import Progress from "../components/Progress";




export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SharedLayout />}>
        
        <Route
          path="/"
          element={
              <motion.div
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <Home />
            </motion.div>
          }
          />

        <Route
          path="/about"
          element={<PageWrapper><About /></PageWrapper>}
          />
        
        <Route
          path="/request-service"
          element={<PageWrapper><RequestService /></PageWrapper>}
        />
        
        <Route
          path="*"
          element={<PageWrapper><Progress /></PageWrapper>}
        />



        </Route>
        
      </Routes>
    </AnimatePresence>
    </>
  );
}
