import CurrencyBar from './components/CurrencyBar';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NewsPanel from './components/NewsPanel';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <CurrencyBar />
      <Header />
      <HeroSlider />
      <NewsPanel />
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}