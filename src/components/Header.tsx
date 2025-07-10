// src/components/Header.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/beach.jpg')" }}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{
            textShadow:
              `2px 2px 4px rgba(0, 0, 0, 0.7), 
               -1px -1px 2px rgba(0, 0, 0, 0.5), 
               1px -1px 2px rgba(0, 0, 0, 0.5), 
               -1px 1px 2px rgba(0, 0, 0, 0.5), 
               1px 1px 2px rgba(0, 0, 0, 0.5)`
          }}
        >
          {t('header.title')}
        </h1>
        <p
          className="mt-4 text-lg md:text-xl"
          style={{
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)'
          }}
        >
          {t('header.subtitle')}
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
