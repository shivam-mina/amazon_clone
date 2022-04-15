import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./yofirebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // code runs only on given conditions
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("User is =>", user);
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
