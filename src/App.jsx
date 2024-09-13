import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './api/auth';
import { Provider } from 'react-redux';
import { store } from './store'; 
import Header from './components/Header/Header.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration.jsx';
import ResetPasswordForm from "./components/ResetPasswordForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from './components/PrivateRoute';  
import OfferDetails from './components/Offers/OfferDetails.jsx';
import Layout from './components/Layout.jsx';
import Offers from './pages/AllOffers.jsx';


import './app.scss';

export default function App() {
    return (
         <Provider store={store}>
        <Router>
            
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/offers" element={<Layout><Offers /></Layout>} />
                <Route path="/offers/:id" element={<Layout><OfferDetails /></Layout>} />
                </Routes>
            </Router>
        </Provider>
        // <AuthProvider>
        //     <Router>
        //         <Routes>
        //             <Route path="/" element={<Login />} />
        //             <Route path="/registration" element={<Registration />} />
        //             <Route path="/resetpassword" element={<ResetPasswordForm />} />
        //              <Route path="/home" element={<Home />} />
        //         </Routes>
        //     </Router>
        // </AuthProvider>
    );
}
