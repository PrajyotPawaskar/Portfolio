import profilePic from '../assets/PortfolioImage.webp'
import { profileInfo } from '../constants/index'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1, x: 0, transition: { duration: 0.5 }
    },
}

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8 '>
                        <motion.img 
                        className='rounded-2xl' 
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.5}}
                        src={profilePic} 
                        alt=""
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className='flex flex-col items-center lg:items-start mt-10'>
                        <motion.h2 
                        variants={childVariants}
                        className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Prajyot Pawaskar</motion.h2>
                        <motion.span 
                        variants={childVariants}
                        className='text-3xl'>Full Stack Developer</motion.span>
                        <motion.p 
                        variants={childVariants}
                        className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{profileInfo}</motion.p>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Hero