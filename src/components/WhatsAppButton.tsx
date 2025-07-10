// src/components/WhatsAppButton.tsx
import { useTranslation } from 'react-i18next';

const phoneNumber = '+526241234567';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const message = encodeURIComponent(t('whatsapp.message'));

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('whatsapp.button')}
    </a>
  );
};

export default WhatsAppButton;
