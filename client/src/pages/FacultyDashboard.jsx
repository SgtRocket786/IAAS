import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';

const FacultyDashboard = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setUploadedFile(file);
    };

    const handleSubmit = async () => {
        if (!uploadedFile) {
            alert('Please upload a file before submitting.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', uploadedFile);

            const response = await fetch('http://127.0.0.1:5000/upload-major-requirements', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('File uploaded successfully!');
            } else {
                setMessage('Failed to upload file. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('An error occurred while uploading the file.');
        }
    };

    return (
        <div>
            <div className="dashboard-container">
                <h2>Faculty Dashboard</h2>
                <div className="form-section">
                    <label htmlFor="major-requirements">Upload Major Requirements (CSV):</label>
                    <input
                        type="file"
                        id="major-requirements"
                        accept=".csv"
                        onChange={handleFileUpload}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;