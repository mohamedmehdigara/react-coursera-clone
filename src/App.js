import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ForIndividuals from './components/ForIndividuals';
import Footer from './components/Footer/Footer';
import ForBusinesses from './components/ForBusinesses';
import ForGovernments from './components/ForGovernments';
import ForUniversities from './components/ForUniversities';
import CoursePreview from './components/CoursePreview/CoursePreview';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

import "./App.css";

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  return (
    <Router>
      <div className="app">
        <Header />

         {/* Render CoursePreview component */}
      <CoursePreview
        title="Course Title"
        description="Course Description"
        instructor="Instructor Name"
      />

      {/* Render DropdownMenu component */}
      <DropdownMenu
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={(selectedOption) => console.log(selectedOption)}
      />

      {/* Render Modal component */}
      <Modal isOpen={true} onClose={() => console.log('Modal closed')}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>

      {/* Render Tabs component */}
      <Tabs tabs={tabs} />
        
        <Routes>
          
          <Route path="/for-businesses" exact element={<ForBusinesses/>} />
          <Route path="/for-individuals" exact element={<ForIndividuals/>} />
          <Route path="/for-governments" exact element={<ForGovernments/>} />
          <Route path="/for-universities" exact element={<ForUniversities/>} />



          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
