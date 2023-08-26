import React from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Login  from './components/Login';
import NavBar from './components/NavBar';
import Layout from './Pages/Layout';
import HomePage from './Pages/HomePage';
import MyCartPage from './Pages/MyCartPage';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='cart' element={<MyCartPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
