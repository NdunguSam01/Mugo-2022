import './App.css';
import './CSS/Footer.css';
import './CSS/Nav.css';
import './CSS/Side.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Side from './Components/Side';
function App() 
{
  return (
    <div className="App">
      <Nav/>
      <Side/>
      <Footer/>
    </div>
  );
}

export default App;
