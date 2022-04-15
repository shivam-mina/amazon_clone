import React from "react";
import { useState } from "react";
import "./style/login.css";
import { auth } from "./yofirebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); // prevents refresh.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault(); // prevents refresh.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon _PNG"
      />
      <div className="login__container">
        <h1 className="login__title">Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
        <button classname="login__signinButton" onClick={signIn}>
          {" "}
          Continue
        </button>
        <p>
          By continuing, you agree to Amazon's Clone{" "}
          <a href="http://www.amazon.com"> Conditions of Use</a> and{" "}
          <a href="http://www.amazon.com">Privacy Notice.</a>
        </p>
        <button classname="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}
export default Login;
