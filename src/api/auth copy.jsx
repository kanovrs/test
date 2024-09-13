import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        // Имитация API вызова
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
        }
    };

    const register = async (username, password) => {
        // Имитация API вызова
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
