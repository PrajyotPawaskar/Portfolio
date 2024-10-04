import React from 'react'
import { RiExternalLinkLine } from "react-icons/ri";
import { projects } from '../constants/index.js'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w/3/4'>
              <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className='mb-4 text-stone-100'>{project.description}</p>
              <p className='mb-4 text-stone-100'>{project.technologies}</p>
              <a href={project.link}> <RiExternalLinkLine className='text-2xl mb  \-4' /></a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects