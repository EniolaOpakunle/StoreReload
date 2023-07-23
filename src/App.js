import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import ForgotPasswordResponse from './Pages/ForgotPasswordResponse';
function App() {
  return (
    <Routes>
      <Route path='/' element= {<LandingPage/>}/>
      <Route path='/privacypolicy' element= {<PrivacyPolicy/>}/>
      <Route path='/termsofservice' element= {<TermsOfService/>}/>
      {/* <Route path='/dashboard'/> */}
      <Route path='/signin' element= {<SignIn/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
      <Route path='/forgotpassword' element = {<ForgotPassword/>}/>
      <Route path='/response' element = {<ForgotPasswordResponse/>}/>
      <Route path='/resetpassword' element = {<ResetPassword/>}/>
    </Routes>
  );
}

export default App;
