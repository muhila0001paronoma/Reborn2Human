import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import HairStyling from './services/HairStyling';
import Facial from './services/Facial';
import BeardShaving from './services/BeardShaving';
import SpecialGrooming from './services/SpecialGrooming';
import Haircut from './services/Haircut';
import OurPackages from './services/OurPackages';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hairstyling" element={<HairStyling />} />
        <Route path="/facials" element={<Facial />} />
        <Route path="/beard-shaving" element={<BeardShaving />} />
        <Route path="/grooming" element={<SpecialGrooming />} />
        <Route path="/haircut" element={<Haircut />} />
        <Route path="/haircuts" element={<Haircut />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
