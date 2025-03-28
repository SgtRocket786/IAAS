const API_URL = 'http://localhost:5000/llm'; // Flask backend URL

export const queryLLM = async (question) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error querying LLM:', error);
        throw error;
    }
};

// Test API call to process numbers, would replace with passing pdf to LLM python project
export const processNumbers = async (num1, num2) => {
    try {
        const response = await fetch(`${API_URL}/process`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2 }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing numbers:', error);
        throw error;
    }
};