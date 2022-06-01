import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../sections/eventsImages/basicprogramming.jpeg";
import BlogImage8 from "../sections/eventsImages/circuits.jpeg";
import BlogImage2 from "../sections/eventsImages/dsa.jpeg";
import BlogImage5 from "../sections/eventsImages/flutter.jpeg";
import BlogImage10 from "../sections/eventsImages/graphicdesign.png";
import BlogImage3 from "../sections/eventsImages/iot.jpeg";
import BlogImage6 from "../sections/eventsImages/ml.jpeg";
import BlogImage9 from "../sections/eventsImages/robotics.jpeg";
import BlogImage7 from "../sections/eventsImages/solidworks.png";
import BlogImage4 from "../sections/eventsImages/webd.jpeg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Events" color="pink" lineCenter={true} />
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Basic Programming"
            subTitle="A low-level programming language is a programming language that provides little or no abstraction from a computer's instruction set architecture—commands or functions in the language map that are structurally similar to processor's instructions. Generally, this refers to either machine code or assembly language."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="Data Structures and Algorithms"
            subTitle="Data structures are used to hold data while algorithms are used to solve the problem using that data. Data structures and algorithms (DSA) goes through solutions to standard problems in detail and gives you an insight into how efficient it is to use each one of them."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="Internet of Things"
            subTitle="The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage4}
            title="Web Development"
            subTitle="Web development refers to building, creating, and maintaining websites."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage5}
            title="Flutter"
            subTitle="Flutter is a free and open-source mobile UI framework created by Google. It allows you to create a native mobile application with only one codebase."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage6}
            title="Machine Learning"
            subTitle="Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage7}
            title="Solidworks"
            subTitle="SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) computer program published by Dassault Systèmes, that runs primarily on Microsoft Windows."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage8}
            title="Circuit Design"
            subTitle="Circuit design is the process of working out the physical form that an electronic circuit will take, the result of the circuit design process is the instructions on how to construct the physical electronic circuit."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage9}
            title="Robotics"
            subTitle="Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage10}
            title="Graphic Design"
            subTitle="Graphic design is the craft of planning and creating visual content to communicate ideas and messages."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
