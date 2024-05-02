import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ForIndividuals from './components/ForIndividuals/ForIndividuals';
import Footer from './components/Footer/Footer';
import ForBusinesses from './components/ForBusinesses/ForBusinesses';
import ForGovernments from './components/ForGovernments/ForGovernments';
import ForUniversities from './components/ForUniversities/ForUniversities';
import CoursePreview from './components/CoursePreview/CoursePreview';
import Modal from './components/Modal/Modal';
import Tabs from './components/Tabs/Tabs';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Carousel from './components/Carousel/Carousel';
import Accordion from './components/Accordion/Accordion';

import "./App.css";

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  const items = [
    { id: 1, content: <img src="image1.jpg" alt="Image 1" /> },
    { id: 2, content: <img src="image2.jpg" alt="Image 2" /> },
    { id: 3, content: <img src="image3.jpg" alt="Image 3" /> },
    // Add more items as needed
  ];

  return (
    <Router>
      <div className="app">
        <Header />

        <Accordion title="Section 1" content={<p>This is the content for section 1</p>} />
        <Accordion title="Section 2" content={<p>This is the content for section 2</p>} />


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
      <Carousel items={items} />

        
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
