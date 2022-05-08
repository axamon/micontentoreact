import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Typewriter from './components/typewriter/Typewriter';
import Tilt from 'react-parallax-tilt';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Crowdfunding from './components/crowdfunding/Crowdfunding';
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
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="cursor-pointer grid-item mt-4 text-center">
          <Tilt trackOnWindow="true" gyroscope="true" tiltReverse="true">
          <Title titolo="MiContento"/>
          <nav>
            <ul>
                <li><a href="#contatti">Contatti</a></li>
                <li><a href="#sportello">Sportello</a></li>
                <li><a href="#gpt">GPT</a></li>
            </ul>
          </nav>
          <Typewriter text="Unità di misura di senso."/>

            <div style={{ height: '10vw', backgroundColor: '' }}>
              <img class="img-fluid" src="Floral-Child-Silhouette.png" />
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
      <div id='contatti' name="contatti">
        <h1>Contatti</h1>
        <br></br>
        <h2>chiamate a soreta</h2>
      </div>
      <div id='sportello' name="sportello">
        <h1>Sportello</h1>
        <br></br>
        <h2>sortellate per tutti</h2>
      </div>
      <div id='gpt' name="gpt">
        <h1>GPT</h1>
        <br></br>
        <h2>Grande Promozione temporale</h2>
      </div>

     
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
