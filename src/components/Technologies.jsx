import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24'>
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4' >
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                >
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                className='p-4'>
                    <RiJavascriptFill className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                className='p-4'>
                    <RiNodejsLine className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                className='p-4'>
                    <BiLogoMongodb className='text-7xl text-green-700' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                className='p-4'>
                    <BiLogoTailwindCss className='text-7xl text-sky-500' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies