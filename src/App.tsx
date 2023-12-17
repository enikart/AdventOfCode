import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
    Link, Routes
} from "react-router-dom";

import Home from "./components/home/homeComponent";
import Year2022 from "./pages/2022";
import Year2023 from "./pages/2023";

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
                  <li>
                      <Link to="/2023">2023</Link>
                  </li>
              </ul>

              <hr />

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/2022/*" element={<Year2022/>}/>
                  <Route path="/2023/*" element={<Year2023/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
