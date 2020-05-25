import React from 'react';
import './App.css';

function LogIn() {
    return (
      <div className="App">
        <form className="auth-form">
          <header className="auth-form-header"><label>Log In</label></header>
          <div className="auth-form__controls">
            <input type="email" className="control fail" placeholder="Email"></input>
            <input type="password" className="control fail" placeholder="Password"></input>
            <a href=''>Forgot password?</a>
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    );
}

export default LogIn;