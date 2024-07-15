import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Apps from './Pages/Apps';
import AppDetail from './Pages/AppDetail';
import Download from './Pages/Download';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path='/detail' element={<AppDetail/>}/>
      <Route path='/download' element={<Download/>}/>
    </Routes>
  </Router>
  );
};

export default App;
