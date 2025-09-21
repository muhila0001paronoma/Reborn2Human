import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import HairStyling from './services/HairStyling';
import Facial from './services/Facial';
import BeardShaving from './services/BeardShaving';
import SpecialGrooming from './services/SpecialGrooming';
import Haircut from './services/Haircut';


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
        <Route path="/packages" element={<Haircut />} />
      </Routes>
    </Router>
  );
}

export default App;
