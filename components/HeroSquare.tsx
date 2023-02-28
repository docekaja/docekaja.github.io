import { motion } from 'framer-motion';

type Props = {};

function HeroSquare({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1.2, 1.8, 1.8, 1],
          opacity: [1, 0.6, 0.8, 0.7, 0.3],
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute mt-80 border border-yellow-600 rounded-xl h-[500px] w-[700px] opacity-20"></div>
      </motion.div>
    </>
  );
}

export default HeroSquare;
