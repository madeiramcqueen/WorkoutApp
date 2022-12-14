import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>GettinFit AuthPage</h1>
      <button className="btn btn-dark" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Not a user yet? Sign Up!'}</button>
      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}