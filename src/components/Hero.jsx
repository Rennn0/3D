import {motion} from 'framer-motion'
import {styles} from '../style'
import {ComputersCanvas} from './canvas'
import { useState, useEffect } from 'react'

const Hero = () => {
  const fadeOut={opacity:0, transition:{duration:6.5}}
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Luka</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop 3D visuals, user interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'/>

        <motion.div
          className='w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-start items-start p-2'
          animate={fadeOut}
        >
          <motion.div
            animate={{ x: [0, 26, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero