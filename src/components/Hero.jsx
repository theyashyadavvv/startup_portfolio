import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        <div className='flex flex-row md:flex-col justify-center items-center mt-16 md:mt-28'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div className="mt-10 md:mt-28">
          <h1 className={`${styles.heroHeadText} text-white text-3xl sm:text-5xl lg:text-7xl`}> 
            Hi, I'm <span className='text-[#915EFF]'>Yash Yadav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-lg md:text-xl`}>
            I develop modern UIs, <br/>
            web & mobile apps (Android/iOS).
          </p>
        </div>
      </div>

      <ComputersCanvas />

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
