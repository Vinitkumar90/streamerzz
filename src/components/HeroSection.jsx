import React from 'react'
import { BRAND_LOGOS, HERO_CONTENT } from '../constants'
import heroImage from "../assets/hero.jpg"
import { motion } from "motion/react"

const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity:1, transition:{straggerChildren: 0.2}}
}

const fadeInUp = {
    hidden:{ opacity:0, y:20},
    visible: {opacity:1, y:0, transition:{duration:0.6}}
}

const fadeIn = {
    hidden: {opacity:0},
    visible:{opacity:1, trasition:{duration:0.6}}
}

const HeroSection = () => {
  return (
    <motion.section className='pt-28 lg:pt-36'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
       <div className='max-w-7xl mx-auto px-4 flex flex-col text-center items-center'>
            <motion.div className='border-neutral-800 border px-3 py-2 rounded-full'
                variants={fadeInUp}
            >
                {HERO_CONTENT.badgeText}
            </motion.div>
            <motion.h1 className='text-5xl lg:text-8xl my-4 font-semibold
            tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700
            bg-clip-text text-transparent
            '
            variants={fadeInUp}
            >
                {HERO_CONTENT.mainHeading.split("\n").map((text,index) => (
                    <span key={index} >
                        {text} <br />
                    </span>
                ))}
            </motion.h1>

            <motion.p className='max-w-4xl text-neutral-400 mt-6'
                variants={fadeInUp}
            >
                {HERO_CONTENT.subHeading}
            </motion.p>

            <motion.div className='mt-6 space-x-4'
                variants={fadeInUp}
            >
                <a href="#" className='inline-block bg-blue-600 hover:bg-blue-500
                text-white py-3 px-6 rounded-lg font-medium'>
                    {HERO_CONTENT.callToAction.primary}
                </a>
                <a href="#" className='inline-block text-white py-3 px-6 rounded-lg
                font-medium border border-gray-500 hover:border-gray-400'>
                    {HERO_CONTENT.callToAction.secondary}
                </a>
            </motion.div>

            <motion.div className='py-10'
                variants={fadeIn}
            >
                <p className='text-gray-400 text-center mb-8'>
                    {HERO_CONTENT.trustedByText}
                </p>
                <motion.div className='flex justify-center gap-8 flex-wrap' variants={fadeInUp}>
                    {BRAND_LOGOS.map((logo,index) => (
                        <img key={index} src={logo.src} alt={logo.alt}
                        className='h-8'
                        />
                    ))}
                </motion.div>

                <motion.div className='mt-12' variants={fadeIn}>
                    <img src={heroImage} alt="sas-image"
                    className='w-full h-auto rounded-3xl border border-neutral-800
                    mb-20'
                    />
                </motion.div>
            </motion.div>
       </div>
    </motion.section>
  )
}

export default HeroSection