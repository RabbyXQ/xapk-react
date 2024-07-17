import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Apps from './Pages/Apps';
import AppDetail from './Pages/AppDetail';
import Download from './Pages/Download';
import Login from './Pages/User/Login';
import Index from './Pages/Admin/Index';
import Head from './Head';
import { ChakraProvider } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <Route path='/admin/platforms' element={<Index/>}/>
      <Route path='/admin/categories' element={<Index/>}/>
      <Route path='/admin/apps' element={<Index/>}/>
      <Route path='/admin/games' element={<Index/>}/>
      <Route path='/admin/uploads' element={<Index/>}/>

    </Routes>
  </Router>
  );
};

export default App;
