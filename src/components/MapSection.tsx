// src/components/MapSection.tsx
import { useTranslation } from 'react-i18next';

const MapSection = () => {
  const { t } = useTranslation();

  const googleMapsUrl =
    "https://www.google.com/maps/place/Los+Cabos,+B.C.S.,+México/@22.8907558,-109.9155875,13z";

  return (
    <section className="mt-12 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">{t('map.title')}</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7528002280036!2d-109.91558752445803!3d22.890755779264838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4ae3e1dff7cf%3A0x3cdd9e4b99e8f4f2!2sLos%20Cabos%2C%20B.C.S.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1720369136300!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('map.title')}
          ></iframe>
        </div>
        <div className="text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
          >
            {t('map.directions')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
