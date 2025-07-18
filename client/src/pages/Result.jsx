import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const generated = await generateImage(input);
      if (generated) {
        setImage(generated);
        setIsImageLoaded(true);
      }
    }

    setLoading(false);
  };

  // 🔁 "Generate Another" button handler
  const handleGenerateAnother = () => {
    setIsImageLoaded(false);    // Show input again
    setImage(assets.sample_img_1); // Optional: reset to placeholder
    setInput('');               // Clear previous input
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
    >
      {/* Image and Loading */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src={image}
            alt="Generated"
            className="max-w-sm rounded"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`}
          />
        </div>
        {loading && (
          <p className="text-gray-600 text-sm">Loading...</p>
        )}
      </div>

      {/* Input Field (only if not showing generated image) */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-white"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full hover:scale-105 transition"
          >
            Generate
          </button>
        </div>
      )}

      {/* Buttons shown after image is generated */}
      {isImageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center mt-10">
          <button
            type="button"
            onClick={handleGenerateAnother} // Add handler here
            className="border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition"
          >
            Generate Another
          </button>

          <a
            href={image}
            download
            className="bg-zinc-900 text-white px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
