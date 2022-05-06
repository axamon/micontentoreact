import './App.css';
import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Typewriter from './components/typewriter/Typewriter';

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
        <div class="grid-item card center" data-tilt><img width="100%" data-tilt src="Floral-Child-Silhouette.png" /></div>
        <div class="grid-item"></div>  
      </div>
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
