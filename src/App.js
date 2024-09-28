import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/logiins';
import Dashboard from '../src/components/dashboard/dash';
import Category from '../src/components/category/category';
import Subcategory from '../src/components/subcategory/subcategory';
import Registration from '../src/components/registration/checkin';
import Privateroutes from '../src/components/privateroutes/route';
import './App.css';
import Products from './components/products/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          {/* Private Routes, accessible only if authenticated */}
          <Route path="/dashboard" element={<Privateroutes><Dashboard /></Privateroutes>} />
          <Route path="/category" element={<Privateroutes><Category /></Privateroutes>} />

          <Route path="/subcategory" element={<Privateroutes><Subcategory /></Privateroutes>} />
          <Route path='/products' element={<Privateroutes><Products /></Privateroutes>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
