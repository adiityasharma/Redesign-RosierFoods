import React from "react";
import { motion } from "framer-motion";

const textVariants = {};

const TextAnimation = ({ childran }) => {
  return <motion.div
    whileHover={{
      y: -6,
    }}
  >
    {childran}
  </motion.div>;
};

export { TextAnimation };