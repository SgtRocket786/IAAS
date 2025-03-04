
import React, { useState } from 'react';

const CoursePlanner = () => {
    const [major, setMajor] = useState('computer_science');
    const [result, setResult] = useState(null);

    const generatePlan = () => {
        let suggestedCourses = [];
        let creditsLeft = 0;

        if (major === 'computer_science') {
            suggestedCourses = ['AI & Machine Learning', 'Software Engineering', 'Cybersecurity'];
            creditsLeft = 30;
        } else if (major === 'information_technology') {
            suggestedCourses = ['Database Management', 'Networking', 'Cloud Computing'];
            creditsLeft = 28;
        } else if (major === 'engineering') {
            suggestedCourses = ['Thermodynamics', 'Control Systems', 'Structural Analysis'];
            creditsLeft = 32;
        }

        setResult({ suggestedCourses, creditsLeft });
    };

    return (
        <div className="dashboard">
            <h2>Welcome to Your Academic Planner</h2>
            <div className="form-group">
                <label>Select Your Major:</label>
                <select value={major} onChange={(e) => setMajor(e.target.value)}>
                    <option value="computer_science">Computer Science</option>
                    <option value="information_technology">Information Technology</option>
                    <option value="engineering">Engineering</option>
                </select>
            </div>
            <button onClick={generatePlan}>Generate Graduation Plan</button>
            {result && (
                <div>
                    <h3>Suggested Courses:</h3>
                    <ul>{result.suggestedCourses.map(course => <li key={course}>{course}</li>)}</ul>
                    <p>Credits Left: {result.creditsLeft}</p>
                </div>
            )}
        </div>
    );
};

export default CoursePlanner;
