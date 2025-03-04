
import React, { useState } from 'react';
import '../styles/login.css';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, role });
    };

    return (
        <div className="login-container">
            <h2>Login to Academic Advising System</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
