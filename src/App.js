import React, { useState } from 'react';
import './App.css';
import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon

function App() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const submitQuestion = async () => {
        setIsLoading(true);
        try {
            const response = {
                "answer": "This is a test"
            };
            setAnswer(response.answer);
        } catch (error) {
            setAnswer('Error: Unable to fetch the answer.');
        }
        setIsLoading(false);
    };

    return (
        <div className="App">
            <div className="card">
                <h1 className="title">Extractive Question-Answering System</h1>
                <div className="input-group">
                    <input
                        className="question-input"
                        type="text"
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder="Type your question here..."
                    />
                    <button className="submit-button" onClick={submitQuestion} disabled={isLoading}>
                        {isLoading ? '...' : <FaArrowUp />}
                    </button>
                </div>
                {answer && <div className="answer-box">{answer}</div>}
            </div>
        </div>
    );
}

export default App;
