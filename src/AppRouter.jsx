
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const AppRouter = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (credentials) => {
        setUser(credentials);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Dashboard /> : <LoginPage onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
