import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StdLoginPage from './pages/StdLoginPage';
import StdHomePage from './pages/StdHomePage';
import StdAi from './pages/StdAi';
import StdPermission from './pages/StdPermission';

function App() {
  // Remove this if not used
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<StdLoginPage />} />
        <Route path="/" element={<StdHomePage />} />
        <Route path="/ai" element={<StdAi/>}/>
        <Route path="/permission" element={<StdPermission/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
