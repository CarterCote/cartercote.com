"use client";

import { motion } from 'framer-motion';
import { blurInVariants } from '../lib/animations';

const StuffHeader = () => {
  return (
    <motion.h1
      className="font-voyager-thin text-[44px] md:text-[54px] mb-6"
      variants={blurInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      stuff
    </motion.h1>
  );
};

export default StuffHeader;
