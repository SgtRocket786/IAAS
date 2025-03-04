
import React, { useState } from 'react';
import '../styles/ai-chat.css';

const AIChat = () => {
    const [chat, setChat] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        setChat([...chat, { sender: 'You', text: input }, { sender: 'AI', text: 'This is a dummy AI response.' }]);
        setInput('');
    };

    return (
        <div className="ai-chat">
            <h2>Ask the AI Advisor</h2>
            <div className="chat-output">
                {chat.map((msg, idx) => <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>)}
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default AIChat;
