import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-12">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">{t('footer.aboutTitle')}</h4>
          <p className="text-sm">{t('footer.aboutText')}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">{t('footer.linksTitle')}</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:underline">{t('footer.linkHome')}</a></li>
            <li><a href="#routes" className="hover:underline">{t('footer.linkRoutes')}</a></li>
            <li><a href="#bikes" className="hover:underline">{t('footer.linkBikes')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">{t('footer.contactTitle')}</h4>
          <p className="text-sm">{t('about.address')}</p>
          <p className="text-sm mt-1"><a href="tel:+526241234567" className="hover:underline">+52 624 123 4567</a></p>
          <p className="text-sm"><a href="https://wa.me/526241234567" className="hover:underline">WhatsApp</a></p>
          
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/tu-pagina" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/526241234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © 2025 Bike Tours Los Cabos. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
