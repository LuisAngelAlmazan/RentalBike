// src/components/About.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="home"
      className="mt-12 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-6">
        <motion.img
          src="/instructor.jpg"
          alt="Instructor"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">{t('about.title')}</h2>
          <p className="mb-2">{t('about.description')}</p>
          <p className="text-gray-600">{t('about.address')}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
