import React from "react";
import {  Routes, Route, HashRouter } from "react-router-dom";
import GetAll from "./Components/GetAll";
import Add from "./Components/Add";
import Update from "./Components/Update";
import GetById from "./Components/GetById";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GetAll />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/GetById/:id" element={<GetById />} />
        
        </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
