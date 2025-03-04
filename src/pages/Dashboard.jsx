
import React from 'react';
import Navbar from '../components/Navbar';
import CoursePlanner from '../components/CoursePlanner';
import AIChat from '../components/AIChat';

const Dashboard = () => (
    <div>
        <Navbar />
        <div className="dashboard-content">
            <CoursePlanner />
            <AIChat />
        </div>
    </div>
);

export default Dashboard;
