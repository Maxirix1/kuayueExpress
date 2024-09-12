import React, { useState } from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/Header.js';
import DestinationFormSection from '../components/DestinationFormSection.js';
import CFSFormSection from '../components/CFSFormSection.js';
import '../style/ariamairu.css';

function Homeadmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">

  
    </div>
  );
}

export default Homeadmin;

