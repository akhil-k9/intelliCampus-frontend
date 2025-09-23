import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StdLoginPage from './pages/StdLoginPage';
import StdHomePage from './pages/StdHomePage';
import StdAi from './pages/StdAi';
import StdPermission from './pages/StdPermission';
import RequestPage from './pages/RequestPage';
import NotesPage from './pages/NotesPage';
import InchargePage from './pages/InchargePage';
import RequestTrackPage from './pages/RequestTrackPage';

function App() {
  // Remove this if not used
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<StdLoginPage />} />
        <Route path="/" element={<StdHomePage />} />
        <Route path="/ai" element={<StdAi/>}/>
        <Route path="/permission" element={<RequestPage/>}/>
        <Route path="/requests" element={<RequestPage/>}/>
        <Route path="/notes" element={<NotesPage/>}/>
        <Route path="/incharge" element={<InchargePage/>}/>
        <Route path="/track" element={<RequestTrackPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
