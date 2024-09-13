import { Navigate } from 'react-router-dom';
import { useAuth } from '../api/auth';

export default function PrivateRoute({element, ...rest}) {
    const { user } = useAuth(); 

    return user ? element : <Navigate to="/" />;
}