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
                'AI & Machine Learning',
                'Software Engineering',
                'Cybersecurity',
                'Data Structures',
                'Operating Systems'
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

                    <button onClick={generatePlan}>Generate Course Plan</button>

                    {/* File upload feedback */}
                    {uploadedFile && (
                        <p>Uploaded: {uploadedFile.name}</p>
                    )}
                </div>

                {/* Result Section */}
                <div className="result-section">
                    <h3>Recommended Courses:</h3>
                    {coursePlan.length > 0 ? (
                        <ul>
                            {coursePlan.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No courses recommended yet. Please generate a plan.</p>
                    )}
                </div>

                {/* AI Chat Section */}
                <AIChat />
            </div>
        </div>
    );
};

export default Dashboard;
