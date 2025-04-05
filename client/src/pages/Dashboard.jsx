import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AIChat from '../components/AIChat';
import CoursePlanner from '../components/CoursePlanner'; // Import CoursePlanner
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [graduationPlan, setGraduationPlan] = useState(''); // Centralized state
    const [loading, setLoading] = useState(false);
    const [isChatEnabled, setIsChatEnabled] = useState(false);

    return (
        <div>
            <div className="dashboard-container">
                <h2>Academic Planner</h2>

                {/* Course Planner Section */}
                <CoursePlanner
                    graduationPlan={graduationPlan}
                    setGraduationPlan={setGraduationPlan}
                    setLoading={setLoading}
                    loading={loading}
                    setIsChatEnabled={setIsChatEnabled}
                />

                {/* AI Chat Section */}
                <AIChat isChatEnabled={isChatEnabled} />
            </div>
        </div>
    );
};

export default Dashboard;
