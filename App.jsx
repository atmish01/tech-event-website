import React from "react";
import Timeline from "./sections/Timeline";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
// import Particles from "react-particles-js";

function App() {
  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="show"
      style={{ width: "100%", margin: 0, height: "100vh" }}
    >
      <ScrollToTop />
      <Starter />
      <About />
      <Blogs />
      <Timeline />
      <Footer />
    </motion.div>
  );
}

export default App;
