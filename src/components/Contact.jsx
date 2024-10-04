import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>Get in touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4 text-xl'>
          prajyotpawaskar2001@gmail.com
        </motion.p>
      </div>
    </div>
  )
}

export default Contact