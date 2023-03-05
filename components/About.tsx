/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col md:flex-row relative text-center md:text-left items-center justify-evenly px-10"
    >
      <h3 className="hidden md:inline absolute top-28 text-gray-500 tracking-[10px] text-lg md:text-xl opacity-50">
        About
      </h3>
      <div className="flex flex-col md:flex-row mx-auto space-y-24 md:space-y-0">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.1 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          src="/myPicture.png"
          className="-mb-20 md:mb-0 flex-shrink-0 h-36 object-cover rounded-3xl md:h-56 xl:64 mx-auto"
        />
        <div className="space-y-8 px-0 md:px-20">
          <h4 className="text-2xl md:text-3xl">Here is my story</h4>
          <div>
            <p className="text-sm md:text-base">
              Hey there, I'm Jan Dočekal! Once upon a time, I was a lawyer, but now I'm a
              junior Javascript developer with a passion for building awesome things.
              After spending some time in the legal world, I realized that I wanted to
              pursue my love for technology, so I took a leap of faith and enrolled in
              Green Fox Academy's coding bootcamp. From September 2022 to February 2023, I
              immersed myself in the world of Javascript and TypeScript, and I've been
              hooked ever since. I'm always looking for new opportunities to grow and
              learn. If you're interested in working together, don't hesitate to reach out
              to me.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
