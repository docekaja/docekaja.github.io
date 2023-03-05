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
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam sed tellus id
            magna elementum tincidunt. Phasellus faucibus molestie nisl. Nullam faucibus
            mi quis velit. Suspendisse nisl. Duis risus. Etiam dictum tincidunt diam. In
            dapibus augue non sapien. Maecenas aliquet accumsan leo. Mauris suscipit,
            ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit
            mauris vel metus. Quisque tincidunt scelerisque libero. Vivamus porttitor
            turpis ac leo.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
