import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ForIndividuals from './components/ForIndividuals';
import Footer from './components/Footer';
import ForBusinesses from './components/ForBusinesses';
import ForGovernments from './components/ForGovernments';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          
          <Route path="/for-businesses" exact element={<ForBusinesses/>} />
          <Route path="/for-individuals" exact element={<ForIndividuals/>} />
          <Route path="/for-governments" exact element={<ForGovernments/>} />


          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
