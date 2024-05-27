import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>

      <Outlet/>

      <br/>
      <Footer/>
      
    </>
  );
}

export default App;
