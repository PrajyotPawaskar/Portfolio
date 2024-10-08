import React from 'react'
import { experience } from '../constants/index'
import { motion } from 'framer-motion'
const Experience = () => {
    return (
        <div className='pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
                {experience.map((e, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w/3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{e.company}</h3>
                            <p className='mb-4 text-stone-100'>{e.role}</p>
                            <p className='mb-4 text-stone-100'>{e.duration}</p>
                            <p className='mb-4 text-stone-100'>{e.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience