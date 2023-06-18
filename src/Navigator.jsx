import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header2 from './components/Header';

import Footer2 from './components/Footer';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header2 />}>
          
          <Route path="footer" element={<Footer2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Navigator;