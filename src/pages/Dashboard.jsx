import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AIChat from '../components/AIChat';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [major, setMajor] = useState('computer_science');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [coursePlan, setCoursePlan] = useState([]);

    const handleMajorChange = (e) => {
        setMajor(e.target.value);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setUploadedFile(file);
        console.log('Uploaded File:', file.name);
    };

    const generatePlan = () => {
        const plans = {
            computer_science: [
                'CMPSC 131: Programming Concepts',
                'CMPSC 132: Object-Oriented Programming',
                'CMPSC 360: Discrete Mathematics',
                'CMPSC 462: Data Structures And Algorithms',
                'CMPSC 487W: Software Engineering And Design',
            ],
            information_technology: [
                'Database Management',
                'Networking',
                'Cloud Computing',
                'Information Security',
                'IT Project Management'
            ],
            engineering: [
                'Thermodynamics',
                'Control Systems',
                'Structural Analysis',
                'Engineering Ethics',
                'Advanced Mathematics'
            ]
        };

        setCoursePlan(plans[major] || []);
    };

    return (
        <div>
            <Navbar />
            <div className="dashboard-container">
                <h2>Academic Planner</h2>

                {/* Form Section */}
                <div className="form-section">
                    <label htmlFor="major">Select Your Major:</label>
                    <select id="major" value={major} onChange={handleMajorChange}>
                        <option value="computer_science">Computer Science</option>
                        <option value="information_technology">Information Technology</option>
                        <option value="engineering">Engineering</option>
                    </select>

                    <label htmlFor="transcript">Upload Your Transcript (PDF):</label>
                    <input
                        type="file"
                        id="transcript"
                        accept=".pdf"
                        onChange={handleFileUpload}
                    />
                </div>

                {/* AI Chat Section */}
                <AIChat />
            </div>
        </div>
    );
};

export default Dashboard;
