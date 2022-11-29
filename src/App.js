import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Introduction/Intro';
import Confernce from './components/Conference/Confernce';
import PhotoSection from './components/PhotoSection/PhotoSection';
import Media from './components/MediaHighlights/Media';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <header>
      <Header/>
      </header>
      <main>

        <Intro/>
         <Confernce/> 
        <PhotoSection/>
        <Media/>
         
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
