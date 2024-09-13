import { useState } from 'react';

import Statistics from '../components/Statistics/Statistics';
import Offers from '../components/Offers/Offers';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import "./Dashboard.scss"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
           <div className="dashboard">
            
        <Statistics />
        <Offers />
     
      </div>
    
   
  );
};

