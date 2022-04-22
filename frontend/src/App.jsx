import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./components/Nav";
import Confess from "./components/Confess";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} />}
          />
          <Route path="/u/:username" element={<Confess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
