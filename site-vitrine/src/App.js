import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Stack from './components/Stack';
import Realisation from './components/Realisation';
import BackToTop from './components/BackToTop';
import ContactV2 from './components/ContactV2';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Realisation />
        {/* <Contact /> */}
        <ContactV2 />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
