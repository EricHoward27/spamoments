import './App.css';
// custom components
import Header from './components/Header'
import Masthead from './components/Masthead'
import About from './components/About'
import Services from './components/Services'
import CallAction from './components/CallAction'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const callLinks = [
    {
      name: 'Serena Prentiss',
      role: 'Spa Therapist',
      image: 'head-img.jpeg'
    }
  ]
  return (
    <div className="App">
      <Header />
      <Masthead />
      <About />
      <Services />
      <CallAction callLinks={callLinks}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
