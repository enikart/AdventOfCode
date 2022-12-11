import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
    Link, Routes
} from "react-router-dom";

import Home from "./components/home/homeComponent";
import Year2022 from "./pages/2022";

function App() {
  return (
      <BrowserRouter>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/2022">2022</Link>
                  </li>
              </ul>

              <hr />

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/2022/*" element={<Year2022/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
