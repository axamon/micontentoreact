import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Typewriter from './components/typewriter/Typewriter';
import Tilt from 'react-parallax-tilt';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Crowdfunding from './components/crowdfunding/Crowdfunding';
import Arco from './components/arco/Arco';
import Circolo from './components/circolo/Circolo';
import Argomento from './components/argomento/Argomento';

// import Spin from './components/spin/Spin';



function App() {
  return (
    <div className="App">
      <div class="circle"></div>
      <div class="circle2"></div>
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item">
        </div>
        <div class="grid-item">
        </div>
        <div class="grid-item"></div>
        
          <div id="inizio" class="cursor-pointer grid-item mt-4 text-center flex">
          <Tilt class="tilter" tiltMaxAngleX="10" >
            <Title titolo="MiContento"/>
            <nav>
              <ul>
                  <li><a href="#Contatti">Contatti</a></li>
                  <li><a href="#Sportello">Sportello</a></li>
                  <li><a href="#GPT">GPT</a></li>
              </ul>
            </nav>
            <Typewriter text="Unità di misura di senso."/>
            <Circolo />
            {/* <div className=''><Spin /></div> */}

            <div style={{ height: '10vw', backgroundColor: '' }}>
              {/* <img class="img-fluid" src="Floral-Child-Silhouette.png" /> */}
              {/* <Typewriter text="Codesto solo oggi possiamo dirti: ciò che non siamo e ciò che non vogliamo." /> */}
            </div>
            </Tilt>
          </div>
        
        <div class="grid-item container">
          
        </div>  
      </div>
      <div className='container'>
        <Crowdfunding />
      </div>
      <Argomento name="Contatti" contenuto="Contattaci sempre"/>
      <Argomento name="Sportello" contenuto="Sportello amico"/>
      <Argomento name="GPT" contenuto="Non so cosa sia"/>

     
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
