import React from 'react';
import { testimonialsData, assets } from '../assets/assets';
import {motion} from 'framer-motion'
const Testimonial = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer testimonials</h1>
      <p className="text-gray-500 mb-10">What our users are saying</p>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all"
          >
            <img src={testimonial.image} alt="" className="rounded-full w-16 mb-4" />
            <h2 className="text-lg font-semibold">{testimonial.name}</h2>
            <p className="text-gray-500 mb-3">{testimonial.role}</p>

            <div className="flex mb-4">
              {Array(testimonial.stars).fill().map((_, starIndex) => (
                <img key={starIndex} src={assets.rating_star} alt="star" className="w-4 h-4" />
              ))}
            </div>

            <p className="text-gray-600 text-sm">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
