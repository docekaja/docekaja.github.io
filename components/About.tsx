import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left justify-evenly items-center px-5">
      <h3 className="absolute top-28 text-gray-600 tracking-[10px] text-lg md:text-xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.1 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        viewport={{ once: true }}
        src="/myPicture.png"
        className="absolute top-52 -mb-20 md:mb-0 flex-shrink-0 h-56 object-cover rounded-3xl"
      />
    </div>
  );
}
