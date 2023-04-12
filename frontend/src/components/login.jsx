import React from 'react';

const Login = () => {
  return (
    <>
	<link rel="stylesheet" type="text/css" href="loginAssets/css/util.css"></link>
	<link rel="stylesheet" type="text/css" href="loginAssets/css/main.css"></link>
 
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form validate-form">
          <span className="login100-form-title p-b-26">Login</span>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is: a@b.c"
          >
            <input className="input100" type="text" name="email" placeholder='Email'/>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <span className="btn-show-pass">
              <i className="zmdi zmdi-eye" />
            </span>
            <input className="input100" type="password" name="pass" placeholder='Password' />
          </div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn">Login</button>
            </div>
          </div>
          <div className="text-center p-t-115">
            <span className="txt1">Don’t have an account?</span> <br></br>
            <a className="txt2" href="#">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
);};

export default Login;
