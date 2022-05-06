import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Typewriter from './components/typewriter/Typewriter';
import Tilt from 'react-parallax-tilt';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <div class="circle"></div>
      <div class="circle2"></div>
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"><Title titolo="MiContento"/></div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item"><Typewriter text="Unità di misura di senso."/></div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item mt-4 text-center">
          <Tilt trackOnWindow="true" gyroscope="true" tiltReverse="true">
          <nav>
            <ul>
                <li><a href="#">Contatti</a></li>
                <li><a href="#">Sportello</a></li>
                <li><a href="#">GPT</a></li>
            </ul>
          </nav>
            <div style={{ height: '10vw', backgroundColor: 'lightblue' }}>
              <img class="img-fluid" src="Floral-Child-Silhouette.png" />
              <Typewriter text="Codesto solo oggi possiamo dirti: ciò che non siamo e ciò che non vogliamo." />

            </div>
          </Tilt>
         
        </div>
        <div class="grid-item container">
          
        </div>  
      </div>
      <div className='container'>
        <div className='crowdfounding'><button class="button-53" role="button">Crowdfounding</button></div>
      </div>
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
