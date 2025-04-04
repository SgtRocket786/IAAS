import React, { useState } from 'react';
import '../styles/AIChat.css';
import { generateResponse } from '../services/apiService';

const AIChat = ({ isChatEnabled }) => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading
    const [error, setError] = useState(''); // State to track errors

    const sendQuestion = async () => {
        try {
            setError(''); // Clear any previous errors
            const userMessage = { user: 'You', text: input };
            setChat([...chat, userMessage]);
            setInput('');
            setIsLoading(true);

            const graduationPlan = await generateResponse(input);

            const aiMessage = { user: 'AI', text: graduationPlan };
            setChat((prevChat) => [...prevChat, aiMessage]);
        } catch (error) {
            console.error('Error handling send:', error);
            setError('Failed to get a response from the AI. Please try again.');
        } finally {
            setIsLoading(false); // Hide loading spinner
        }
    };

    return (
        <div className="ai-chat">
            <h2>AI Advisor Chat</h2>
            <div className="chat-box">
                <p><strong>AI:</strong> Start by uploading your What-If Report.</p>
                {chat.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
                {isLoading && <p><em>Loading...</em></p>}
            </div>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
            />
            <button disabled={!isChatEnabled || isLoading} onClick={sendQuestion}>
                Send
            </button>
        </div>
    );
};

export default AIChat;