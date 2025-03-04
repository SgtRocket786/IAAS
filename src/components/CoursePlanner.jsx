
import React, { useState } from 'react';

const CoursePlanner = () => {
    const [major, setMajor] = useState('computer_science');
    const [result, setResult] = useState(null);

    const generatePlan = () => {
        const plans = {
            computer_science: ['AI & Machine Learning', 'Software Engineering', 'Cybersecurity'],
            information_technology: ['Database Management', 'Networking', 'Cloud Computing'],
            engineering: ['Thermodynamics', 'Control Systems', 'Structural Analysis']
        };
        setResult(plans[major]);
    };

    return (
        <div className="planner">
            <h2>Course Planner</h2>
            <select value={major} onChange={(e) => setMajor(e.target.value)}>
                <option value="computer_science">Computer Science</option>
                <option value="information_technology">Information Technology</option>
                <option value="engineering">Engineering</option>
            </select>
            <button onClick={generatePlan}>Generate Plan</button>
            {result && (
                <ul>{result.map(course => <li key={course}>{course}</li>)}</ul>
            )}
        </div>
    );
};

export default CoursePlanner;
