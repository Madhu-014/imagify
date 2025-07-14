import React, { useContext } from 'react';
import { plans, assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion'
const BuyCredit = () => {
  const {user}=useContext(AppContext)
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10 px-4">
      
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>

      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 w-60 flex flex-col items-center gap-4 hover:shadow-lg transition-all"
          >
            <img src={assets.logo_icon} alt="lock icon" className="w-8" />
            <p className="font-semibold text-lg">{item.id}</p>
            <p className="text-gray-500 text-sm">{item.desc}</p>
            <p className="font-medium">
              ${item.price} / {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8
            text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase':'Get started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
