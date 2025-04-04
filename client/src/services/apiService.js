const API_URL = 'http://localhost:5000/llm'; // Flask backend URL

export const generateResponse = async (userQuestion) => {
    try {
        const response = await fetch("http://127.0.0.1:5000/llm/generate-response", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_question: userQuestion }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response from LLM:", data);
        return data.graduation_plan; // Extract the graduation plan from the response
    } catch (error) {
        console.error('Error querying LLM:', error);
        throw error;
    }
};
