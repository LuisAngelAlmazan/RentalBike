import './index.css';
import Header from './components/Header';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageToggle from './components/LanguageToggle';
import Routes from './components/Routes';
import MapSection from './components/MapSection';
import BikesSection from './components/BikesSection';
import Footer from './components/Footer';


function App() {
  
 
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">

      {/* Language switcher */}
      <LanguageToggle />

      {/* Header */}
      <Header />

      {/* About section */}
      <main className="flex-grow">
        <About />
      </main>
      <WhatsAppButton />
      <Routes />
      <BikesSection />
      <MapSection />
      <Footer/>
      
    </div>
  );
}

export default App;
