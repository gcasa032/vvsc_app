import './App.css';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Header/>
      <AboutMe/>
      <div id='about' style={{backgroundColor: 'red', height: '1000px', width: '100%'}}></div>
      <div id='testimonials' style={{backgroundColor: 'green', height: '1000px', width: '100%'}}></div>
      <div id='gallery' style={{backgroundColor: 'blue', height: '1000px', width: '100%'}}></div>
      <div id='contact' style={{backgroundColor: 'yellow', height: '1000px', width: '100%'}}></div>
    </div>
  );
}

export default App;
