import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState('student');

  const handleLogin = () => {
    // Simulate login with the selected role
    onLogin({ role });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
