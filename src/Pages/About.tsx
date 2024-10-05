import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedBox = ({ children, animationType }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,  // Trigger animation when 10% of the box is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Define animations based on type
  const variants = {
    leftToRight: {
      hidden: { opacity: 0, x: -100 }, // Start from the left
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    rightToLeft: {
      hidden: { opacity: 0, x: 100 }, // Start from the right
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    bottomToTop: {
      hidden: { opacity: 0, y: 100 }, // Start from the bottom
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8 }, // Start zoomed out
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animationType]} // Use the selected animation variant
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between">
        {/* Left to Right Animation */}
        <AnimatedBox animationType="leftToRight">
          <div className="w-[450px] h-[400px] bg-rose-700 ml-2 mt-2 rounded-md"></div>
        </AnimatedBox>
        {/* Right to Left Animation */}
        <AnimatedBox animationType="rightToLeft">
          <div className="w-[450px] h-[400px] bg-green-700 ml-2 mt-2 rounded-md"></div>
        </AnimatedBox>
        {/* Bottom to Top Animation */}
        <AnimatedBox animationType="bottomToTop">
          <div className="w-[450px] h-[400px] bg-orange-700 ml-2 mt-2 rounded-md"></div>
        </AnimatedBox>
      </div>

      {/* Zoom Animation */}
      <AnimatedBox animationType="zoom">
        <div className="w-[450px] h-[400px] bg-blue-700 ml-2 mt-2 rounded-md"></div>
      </AnimatedBox>
      
      {/* Bottom to Top Animation */}
      <AnimatedBox animationType="bottomToTop">
        <div className="w-[450px] h-[400px] bg-sky-700 ml-2 mt-2 rounded-md"></div>
      </AnimatedBox>

      {/* Left to Right Animation */}
      <AnimatedBox animationType="leftToRight">
        <div className="w-[450px] h-[400px] bg-indigo-700 ml-2 mt-2 rounded-md"></div>
      </AnimatedBox>
    </div>
  );
};

export default About;
