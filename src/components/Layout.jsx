import { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';


function Layout({ children }) {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='layout'>
      <Header toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
          <main className='main'>
        <div className="backgraund">
          <div className="border">
            <div className="container">
              {children}
              </div>
          </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
