import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./components/Nav";
import Confess from "./components/Confess";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/u/:username" element={<Confess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
