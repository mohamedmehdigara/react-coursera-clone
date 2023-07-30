import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ForBusinesses from './components/ForBusinesses';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main/>
        <Routes>
          
          <Route path="/for-businesses" exact element={<ForBusinesses/>} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
