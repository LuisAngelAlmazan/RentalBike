// src/components/BikesSection.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const BikesSection = () => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const bikes = [
    { name: t('bikes.bike1'), img: '/bike1.jpeg' },
    { name: t('bikes.bike2'), img: '/bike2.jpeg' },
    { name: t('bikes.bike3'), img: '/bike3.jpg' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="bikes" 
      className="mt-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('bikes.title')}</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {bikes.map((bike, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setActiveImage(bike.img)}
            >
              <img
                src={bike.img}
                alt={bike.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-center">{bike.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={activeImage}
              alt="Expanded bike"
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // para que no se cierre al hacer click sobre la imagen
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BikesSection;
