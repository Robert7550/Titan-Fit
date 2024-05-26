import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './screencomponents/About';
import Classes from './screencomponents/Classes';
import Hero from './screencomponents/Hero';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Classes/>
      <Footer/>
    </>
  );
}

export default App;
