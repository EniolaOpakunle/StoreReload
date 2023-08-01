import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from './Pages/LandingPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import ForgotPasswordResponse from './Pages/ForgotPasswordResponse';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <Routes>
      <Route path='/' element= {<LandingPage/>}/>
      <Route path='/privacypolicy' element= {<PrivacyPolicy/>}/>
      <Route path='/termsofservice' element= {<TermsOfService/>}/>
      <Route path='/signin' element= {<SignIn/>}/>
      <Route 
        path='/signup' 
        element = {
        <GoogleOAuthProvider clientId="693659129125-si3ujerr1jtp0qnthcd0784n1ufj2e41.apps.googleusercontent.com">
          <SignUp/>
        </GoogleOAuthProvider>}
      />
      <Route path='/forgotpassword' element = {<ForgotPassword/>}/>
      <Route path='/response' element = {<ForgotPasswordResponse/>}/>
      <Route path='/resetpassword' element = {<ResetPassword/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
    </Routes>
  );
}

export default App;
