import React, { useState } from 'react';
import "./DropdownMenu.css";

const DropdownMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    // You can perform any action here based on the selected option
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
