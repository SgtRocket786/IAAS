import React, { useState } from 'react';
import '../styles/AIChat.css';
import { generateResponse } from '../services/apiService';

const AIChat = ({ isChatEnabled }) => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');

    const sendQuestion = async () => {
        try {
            const graduationPlan = await generateResponse(input);
            setChat([...chat, { user: 'You', text: input }, { user: 'AI', text: graduationPlan }]);
            setInput('');
        } catch (error) {
            console.error('Error handling send:', error);
        }
    };

    return (
        <div className="ai-chat">
            <h2>AI Advisor Chat</h2>
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button disabled={!isChatEnabled} onClick={sendQuestion}>Send</button>
        </div>
    );
};

export default AIChat;