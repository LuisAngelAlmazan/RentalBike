// src/components/LanguageToggle.tsx
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleLanguage}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all"
      >
        {i18n.language === 'es' ? 'English' : 'Español'}
      </button>
    </div>
  );
};

export default LanguageToggle;
