import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
function App() {
  return (
    <Routes>
      <Route path='/' element= {<LandingPage/>}/>
      <Route path='/privacypolicy' element= {<PrivacyPolicy/>}/>
      <Route path='/termsofservice' element= {<TermsOfService/>}/>
    </Routes>
  );
}

export default App;
