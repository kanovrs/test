import { useEffect, useState } from 'react';


import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Dashboard from './Dashboard.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import AllOffers from "./AllOffers.jsx";

import Login from './Login.jsx'
import './Home.scss'

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
      <section className="home">
          <Dashboard />
        </section>
    );
}
