import './App.css';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Header/>
      <AboutMe id='about'/>
      <div id='testimonials' style={{backgroundColor: 'green', height: '1000px', width: '100%'}}></div>
      <div id='gallery' style={{backgroundColor: 'blue', height: '1000px', width: '100%'}}></div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
