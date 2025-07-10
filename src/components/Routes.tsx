// src/components/Routes.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Routes = () => {
  const { t } = useTranslation();

  const [activeRoute, setActiveRoute] = useState<null | {
    key: string;
    img: string;
    description: string;
  }>(null);

  const sampleRoutes = [
    {
      key: 'route1',
      img: '/route1.jpg',
      description: t('routes.route1Description'),
    },
    {
      key: 'route2',
      img: '/route2.jpg',
      description: t('routes.route2Description'),
    },
    {
      key: 'route3',
      img: '/route3.jpg',
      description: t('routes.route3Description'),
    },
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
      id="routes"
      className="mt-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t('routes.popularRoutes')}
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {sampleRoutes.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setActiveRoute(r)}
            >
              <img src={r.img} alt={t(`routes.${r.key}`)} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-center">
                  {t(`routes.${r.key}`)}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal expandible */}
      <AnimatePresence>
        {activeRoute && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setActiveRoute(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-xl w-full p-6 shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeRoute.img}
                alt={t(`routes.${activeRoute.key}`)}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                {t(`routes.${activeRoute.key}`)}
              </h3>
              <p className="text-gray-700 text-center">
                {activeRoute.description}
              </p>

              <button
                onClick={() => setActiveRoute(null)}
                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Routes;
