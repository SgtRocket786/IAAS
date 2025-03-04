import React, { useState } from 'react';
import '../styles/AIChat.css';


const AIChat = () => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        const newChat = [
            ...chat,
            { user: 'You', text: input },
            { user: 'AI', text: 'This is a placeholder response.' }
        ];
        setChat(newChat);
        setInput('');
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
