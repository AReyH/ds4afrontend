import './App.css';
//import {Nav,NavbarContainer,NavLogo} from './components/Navbar/NavbarElements';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages';

import AboutUs from './pages/aboutus';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
