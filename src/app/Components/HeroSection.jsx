"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
const HeroSection = () => {
  return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5}} className="col-span-8 text-center place-self-center sm:text-left justify-self-start">
                    <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                                sequence={[
                                    
                                    'Yémalin',
                                    1000, 
                                    'Web Developer',
                                    1000,
                                    'Mobile Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl sm:text-left">
                    Welcome to my portfolio ! As a fullstack web developer passionate about creating exceptional 
                    online experiences, 
                    I&apos;m excited to show you my achievements and skills. 
                    Explore my work and find out how I can contribute to your next project.
                    </p>
                    <div>
                        <button className="w-full px-6 py-3 mb-2 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 sm:w-fit hover:bg-slate-200">Hire Me</button>
                        <button className="w-full px-1 py-1 text-white bg-transparent rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 sm:w-fit hover:bg-slate-800">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                                Download CV
                            </span>
                        </button>
                    </div>
                </motion.div>   
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5}} className="col-span-4 mt-4 place-self-center lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/bg.png"
                            alt="Une image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />  
                    </div>  
                </motion.div> 
            </div>
        </section>
  )
}

export default HeroSection
