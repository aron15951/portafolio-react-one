import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <h1 className='my-20 text-center text-4xl'>
        Sobre <span className='text-neutral-50'>mi</span>
      </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5}}
              className='rounded-2xl'
              src={aboutImg}
              alt='aboutMe.img'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='my-2 max-w-xl py-6 '
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
