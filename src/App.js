import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Typewriter from './components/typewriter/Typewriter';
import Tilt from 'react-parallax-tilt';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"><Title titolo="MiContento"/></div>
        <div class="grid-item"></div>  
        <div class="grid-item"></div>
        <div class="grid-item"><Typewriter text="Unità di misura di senso."/></div>
        <div class="grid-item"></div>  
        <div class="grid-item"></div>
        <div class="grid-item mt-2 responsive">
          <Tilt trackOnWindow="true" gyroscope="true">
            <div style={{ height: '300px', backgroundColor: 'lightblue' }}>
              <img width="100%" data-tilt src="Floral-Child-Silhouette.png" />
            </div>
          </Tilt>

         
        </div>
        <div class="grid-item"></div>  
      </div>
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
