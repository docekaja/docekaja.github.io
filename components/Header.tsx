import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 py-2 bg-[rgb(29,29,29)] shadow-md">
      <div className="flex flex-row justify-between container mx-auto">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.3 }}
          animate={{ x: 0, opacity: 1, scale: 0.9 }}
          transition={{ duration: 1.3 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/jan-docekal"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCWmvGh9o4ojguH_pvELGTTQ"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/docekaja"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.3 }}
          animate={{ x: 0, opacity: 1, scale: 0.9 }}
          transition={{ duration: 1.3 }}
          className="flex flex-row items-center cursor-pointer"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Contact me
          </p>
        </motion.div>
      </div>
    </header>
  );
}
