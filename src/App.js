import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from './components/title/Title';

import Typewriter from './components/typewriter/Typewriter';
import Tilt from 'react-parallax-tilt';

import Crowdfunding from './components/crowdfunding/Crowdfunding';
import Arco from './components/arco/Arco';
import Circolo from './components/circolo/Circolo';
import Argomento from './components/argomento/Argomento';
import Navbar  from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import video from "./MVI_0025.mp4"

// import Spin from './components/spin/Spin';



function App() {
  return (
    <div  id="inizio" className="App">
      <div className='container tm-4'>
        <Title titolo="MiContento"/>
        <Navbar />
      </div>

      <div class="circle"></div>
      <div class="circle2"></div>
      
    

      <div className='container'>
        <div className='d-flex justify-content-center'>

          <Tilt tiltMaxAngleX={10} perspective={1000000} >
            <div className='tilter'>
              <video id="fiamma" width="90%" loop autoPlay muted>
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <Typewriter text="Unità di misura di senso."/>
            </div>
          </Tilt>
          <div className='motto'>
          </div>
        </div>
        <div className='argomenti row'>
          <Argomento name="Contatti" contenuto="Contattaci solo il 31 novembre o il 30 febbraio"/>
          <Argomento name="Sportello" contenuto="Sportello amico"/>
          <Argomento name="GPT" contenuto="Non so cosa sia"/>
        </div>
      </div>

       
      <div className='container'>
        <Crowdfunding  />
      </div>
    
     
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
