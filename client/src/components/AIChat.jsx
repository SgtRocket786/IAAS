import React, { useState } from 'react';
import '../styles/AIChat.css';
import { generateResponse } from '../services/apiService';

const AIChat = ({ isChatEnabled }) => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading

    const sendQuestion = async () => {
        try {
            const userMessage = { user: 'You', text: input };
            setChat([...chat, userMessage]);
            setInput('');
            setIsLoading(true); 

            const graduationPlan = await generateResponse(input);

            const aiMessage = { user: 'AI', text: graduationPlan };
            setChat((prevChat) => [...prevChat, aiMessage]);
        } catch (error) {
            console.error('Error handling send:', error);
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
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button disabled={!isChatEnabled || isLoading} onClick={sendQuestion}>Send</button>
        </div>
    );
};

export default AIChat;