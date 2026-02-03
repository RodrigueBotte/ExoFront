import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Stack from './components/Stack';
import Realisation from './components/Realisation';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Realisation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
