import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Apps from './Pages/Apps';
import AppDetail from './Pages/AppDetail';
import Download from './Pages/Download';
import Login from './Pages/User/Login';
import Index from './Pages/Admin/Index';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path='/detail' element={<AppDetail/>}/>
      <Route path='/download/:upload_id' element={<Download/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin/dashboard' element={<Index/>}/>
      <Route path='/admin/profile' element={<Index/>}/>

    </Routes>
  </Router>
  );
};

export default App;
