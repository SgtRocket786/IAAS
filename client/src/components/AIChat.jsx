import React, { useState } from 'react';
import { queryLLM } from '../services/apiService';
import '../styles/AIChat.css';

const AIChat = () => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const newChat = [...chat, { user: 'You', text: input }];
        setChat(newChat);
        setInput('');

        try {
            const response = await queryLLM(input);
            setChat([...newChat, { user: 'AI', text: response }]);
        } catch (error) {
            setChat([...newChat, { user: 'AI', text: 'Error querying LLM' }]);
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
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default AIChat;
