import React from 'react';
import './App.css';


function LogIn() {
    return (
      <div className="App">
        <form className="auth-form" id="auth-form">
          <header className="auth-form-header" id="header"><label>Personal File</label></header>
          <div className="auth-form__controls" id="controls">
            <input type="email" className="control fail" 
            name="email" id="email" placeholder="Email" autoComplete="off"></input>
            <input type="password" className="control fail" 
            name="password" id="password" placeholder="Password"></input>
            <a href=''>Forgot password?</a>
            <Submit></Submit>
          </div>
        </form>
        <div className="second-page" id="second-page"></div>
      </div>
    );
  }

export default LogIn;

function Submit(){
  function mes(){
    console.log('do not working')
    var authform = document.getElementById("auth-form");
    authform.classList.add('flip');
    var secondpage = document.getElementById("second-page");
    secondpage.classList.add('page');
    var clear = document.getElementById("controls");
    clear.classList.add('clear');
    var clear = document.getElementById("header");
    clear.classList.add('clear');
    setTimeout(function(){
      window.location.href = 'about';
    }, 2 * 1000);
  }   
  return (
    <button type="button" onClick={mes}>Sign in</button>
    )
}