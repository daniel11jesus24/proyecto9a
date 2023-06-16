import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header2 from './components/Header2';
import Content2 from './components/Content2';
import Footer2 from './components/Footer2';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header2 />}>
          <Route index element={<Content2 />} />
          <Route path="footer" element={<Footer2/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator;