import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null); 

    const login = async (username, password) => {
        try {
            const response = await fetch('http://185.237.219.114:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                localStorage.setItem('token', userData.token);  
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (err) {
            setError('Ошибка сети. Попробуйте позже.');
        }
    };

    const register = async (name, email, telegram, password) => {
        try {
            const response = await fetch('http://185.237.219.114:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, telegram, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                localStorage.setItem('token', userData.token);  
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (err) {
            setError('Ошибка сети. Попробуйте позже.');
        }
    };

    const resetPassword = async (email) => {
        try {
            const response = await fetch('http://185.237.219.114:3000/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const result = await response.json();
                setError(null); 
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Ошибка при сбросе пароля');
            }
        } catch (err) {
            setError('Ошибка сети. Попробуйте позже.');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');  
    };

    return (
        <AuthContext.Provider value={{ user, login, resetPassword, register, logout, error, setError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
