import axios from 'axios';

export const fetchGemini = async (text: string): Promise<string> => {
    const myHeaders = {
        "Content-Type": "application/json",
    };

    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": `${text} ответ на русском`
                    }
                ]
            }
        ]
    });

    try {
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_REACT_APP_GEMINI_KEY}`, raw, { headers: myHeaders });
        
        // Предполагаем, что ответ приходит в нужном формате
        const textResponse = response.data.candidates[0].content.parts[0].text;

        // Убираем символы ** из текста
        const cleanedText = textResponse.replace(/\*\*/g, '');
        
        return cleanedText; // Возвращаем ответ
    } catch (error) {
        console.error('Error fetching data:', error);
        return ''; // Возвращаем пустую строку в случае ошибки
    }
}

export const fetchGeminiLanguage = async (text: string, language: string): Promise<string> => {
    const myHeaders = {
        "Content-Type": "application/json",
    };

    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": `${text} ответь на ${language} языке`
                    }
                ]
            }
        ]
    });

    try {
        const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAXkWOLA8X_5sWPTuLSFbQaoAdbJ3BwUxk", raw, { headers: myHeaders });
        
        // Предполагаем, что ответ приходит в нужном формате
        const textResponse = response.data.candidates[0].content.parts[0].text;

        // Убираем символы ** из текста
        const cleanedText = textResponse.replace(/\*\*/g, '');
        
        return cleanedText; // Возвращаем ответ
    } catch (error) {
        console.error('Error fetching data:', error);
        return ''; // Возвращаем пустую строку в случае ошибки
    }
}
