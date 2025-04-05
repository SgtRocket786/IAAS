import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css'; // Ensure consistent styling

const CoursePlanner = ({ graduationPlan, setGraduationPlan, setLoading, loading, setIsChatEnabled }) => {
    const [major, setMajor] = useState('computer_science');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setUploadedFile(file);
        setIsChatEnabled(true);
    };

    const generateGraduationPlan = async () => {
        if (!uploadedFile) {
            alert('Please upload your transcript before generating a graduation plan.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/llm/generate-response', {
                user_question: 'Generate a Graduation Plan based on the attached What-If Report',
            });

            setGraduationPlan(response.data.graduation_plan || 'No plan generated.');
        } catch (error) {
            console.error('Error generating graduation plan:', error);
            setGraduationPlan('An error occurred while generating the graduation plan.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="planner">
            <h3>Course Planner</h3>
            <label htmlFor="major">Select Your Major:</label>
            <select id="major" value={major} onChange={(e) => setMajor(e.target.value)}>
                <option value="computer_science">Computer Science</option>
                <option value="information_technology">Information Technology</option>
                <option value="engineering">Engineering</option>
            </select>

            {/* File Upload Section */}
            <div className="form-section">
                <label htmlFor="transcript">Upload Your Transcript (PDF):</label>
                <input
                    type="file"
                    id="transcript"
                    accept=".pdf"
                    onChange={handleFileUpload}
                />

                {/* Generate Graduation Plan Button */}
                <button onClick={generateGraduationPlan} disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Graduation Plan'}
                </button>

                {/* Graduation Plan Output */}
                {graduationPlan && (
                    <textarea
                        readOnly
                        value={graduationPlan}
                        className="graduation-plan-output"
                        placeholder="Graduation plan will appear here..."
                    />
                )}
            </div>
        </div>
    );
};

export default CoursePlanner;
