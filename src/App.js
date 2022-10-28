import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import {
  Home,
  About,
  Events,
  Blog,
  Contact,
  Donation
} from './Screen/'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
