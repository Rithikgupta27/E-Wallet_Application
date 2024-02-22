import React, { useState } from 'react';
import LoginForm from './Forms/LoginForm';
import SignUpForm from './Forms/SignUpForm';
import ForgotPasswordForm from './Forms/ForgotPasswordForm';
import RegistrationForm from './Forms/RegistrationForm';

const FormComponent = () => {
    const [currentForm, setCurrentForm] = useState('login'); // Initially, set to 'login'
    const [signUpData, setSignUpData] = useState('');

    const updateSignUpData = (mobileNumber) => {
      setSignUpData(mobileNumber);
    }

    const switchToForgotPassword = () => {
      setCurrentForm('forgotPassword');
    };
  
    const switchToSignUp = () => {
      setCurrentForm('signUp');
    };

    const switchToRegistration = () => {
        setCurrentForm('registration');
    };
  
    const switchToLoginForm = () => {
      setCurrentForm('login');
    };
  
    let currentComponent;
    switch (currentForm) {
      case 'login':
        currentComponent = <LoginForm switchToForgotPassword={switchToForgotPassword} switchToSignUp={switchToSignUp} />;
        break;
      case 'signUp':
        currentComponent = <SignUpForm switchToLoginForm={switchToLoginForm} switchToRegistration={switchToRegistration} updateSignUpData={updateSignUpData} />;
        break;
      case 'registration':
        currentComponent = <RegistrationForm signUpData={signUpData} switchToLoginForm={switchToLoginForm} />;
        break;
      case 'forgotPassword':
        currentComponent = <ForgotPasswordForm switchToLoginForm={switchToLoginForm} switchToSignUp={switchToSignUp} />;
        break;
      default:
        currentComponent = null;
    }
  
<<<<<<< HEAD
    return <div>{currentComponent}</div>;
=======
    return <div style={{border : '1px ', borderColor : 'black'}}>{currentComponent}</div>;
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
}

export default FormComponent
