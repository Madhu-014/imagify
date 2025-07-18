import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const Description = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center 
    justify-center my-24 p-26 md:px-28'>
      <h1 className='text-3xl sm:text-4xl
      font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-10'>Turn your imagination into visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row 
      items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 
        x1:w-96 rounded-lg'/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg
            mb-4'>
                Introducing the AI-Powered Text to Image Generator
            </h2>
            <p className='text-gray-600 mb-4'>
                Easily bring your ideas to life with our free AI image generator. 
  Whether you need stunning visuals for your projects, social media, 
  or just for fun, our tool makes it simple and fast to generate unique 
  images from your text prompts. Experience the power of AI to transform 
  your imagination into high-quality images within seconds. 
  No design skills? No problem — just describe what you envision, and 
  watch AI turn your words into visuals.
            </p>
            <p className='text-gray-600'>Simply type in a text prompt and let our AI do the magic.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
